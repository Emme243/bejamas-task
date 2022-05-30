import { useQuery } from '@apollo/client';
import ARTWORK_QUERY from '../../graphql/queries/artworkQuery';
import { Artwork } from '../../models/Artwork';
import ArtworkCard from './ArtworkCard';
import { useAppSelector } from '../../hooks/useAppStore';
import PaginationFilter from '../ArtworkFilter/PaginationFilter';

const ARTWORKS_PER_PAGE = 6;

function ArtworkContent({ className }: { className?: string }) {
  const { categories, currentPage, priceRange, sortBy, sortType } = useAppSelector(
    state => state.artworkFilter
  );

  const filterInput = [];
  if (categories.length > 0) filterInput.push({ key: 'category', type: 'IN', values: categories });
  if (priceRange.length > 0)
    filterInput.push({ key: 'price', type: 'RANGE', values: priceRange.map(String) });

  const { loading, data, error } = useQuery(ARTWORK_QUERY, {
    variables: {
      sort: { by: sortBy, type: sortType },
      limit: ARTWORKS_PER_PAGE,
      page: currentPage,
      filter: filterInput.length > 0 ? filterInput : null,
    },
  });

  if (loading) return <div className="w-full">Loading Artworks...</div>;
  if (error) return <div className="w-full">Ups! {error.message}</div>;

  const artworks = data.displayedArtworks.artworks as Artwork[];
  if (artworks.length === 0)
    return (
      <div className="w-full text-center">
        <h3 className="text-xl font-semibold">No artworks found 🙁</h3>
        <p className="mt-2 text-lg text-gray-middle">
          Try changing the filter or <span className="cursor-pointer underline">reset them</span>
        </p>
      </div>
    );

  const totalOfArtworks = data.displayedArtworks.total as number;

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
        {artworks.map(artwork => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <PaginationFilter artworksPerPage={ARTWORKS_PER_PAGE} totalOfArtworks={totalOfArtworks} />
      </div>
    </div>
  );
}

export default ArtworkContent;
