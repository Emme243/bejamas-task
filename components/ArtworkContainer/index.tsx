import { useQuery } from '@apollo/client';
import ARTWORK_QUERY from '../../graphql/queries/artworkQuery';
import { Artwork } from '../../models/Artwork';
import ArtworkCard from './ArtworkCard';
import Pagination from '../Ui/Pagination';
import useQueryRoute from '../../hooks/useQueryRoute';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppStore';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setCurrentPage } from '../../store/artworkFilterSlice';

const ARTWORKS_PER_PAGE = 6;
function ArtworkContainer({ className }: { className?: string }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { categories, priceRange, sortBy, sortType, setCurrentPageToUrl } = useQueryRoute();

  const currentPage = useAppSelector(state => state.artworkFilter.currentPage);
  useEffect(() => {
    const currentPageQuery = router.query.currentPage as string | undefined;
    const currentPage = currentPageQuery ? parseInt(currentPageQuery) : 1;
    dispatch(setCurrentPage(currentPage));
  }, [dispatch, router.query.currentPage]);

  const filterInput = [];
  if (categories.length > 0) filterInput.push({ key: 'category', type: 'IN', values: categories });
  if (priceRange.length > 0) filterInput.push({ key: 'price', type: 'RANGE', values: priceRange });

  const { loading, data, error } = useQuery(ARTWORK_QUERY, {
    variables: {
      sort: { by: sortBy, type: sortType },
      limit: ARTWORKS_PER_PAGE,
      page: currentPage,
      filter: filterInput.length > 0 ? filterInput : null,
    },
  });

  if (loading) return <div>Loading Artworks...</div>;
  if (error) return <div>Ups! {error.message}</div>;

  const artworks = data.displayedArtworks.artworks as Artwork[];
  if (artworks.length === 0) return <div>No artworks found</div>;

  const totalOfArtworks = data.displayedArtworks.total as number;
  const totalPages = Math.ceil(totalOfArtworks / ARTWORKS_PER_PAGE);

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
        {artworks.map(artwork => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPageToUrl}
        />
      </div>
    </div>
  );
}

export default ArtworkContainer;
