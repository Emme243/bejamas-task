import useRouteQuery from '../../hooks/useRouteQuery';
import { useQuery } from '@apollo/client';
import ARTWORK_QUERY from '../../graphql/queries/artworkQuery';
import { Artwork } from '../../models/Artwork';
import ArtworkCard from './ArtworkCard';

function ArtworkContainer() {
  const { sortBy, sortType, priceRangeQueryValue, categoryQueryValue } = useRouteQuery();
  const categories: string[] = categoryQueryValue.length > 0 ? categoryQueryValue.split(',') : [];
  const priceRange: string[] =
    priceRangeQueryValue.length > 0 ? priceRangeQueryValue.split(',') : [];

  const filterInput = [];
  if (categories.length > 0) filterInput.push({ key: 'category', type: 'IN', values: categories });
  if (priceRange.length > 0) filterInput.push({ key: 'price', type: 'RANGE', values: priceRange });

  const { loading, data, error } = useQuery(ARTWORK_QUERY, {
    variables: {
      sort: { by: sortBy, type: sortType },
      limit: 6,
      page: 1,
      filter: filterInput.length > 0 ? filterInput : null,
    },
  });

  if (loading) return <div>Loading Artworks...</div>;
  if (error) return <div>Ups! {error.message}</div>;

  const artworks = data.displayedArtworks.artworks as Artwork[];
  if (artworks.length === 0) return <div>No artworks found</div>;

  return (
    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
      {artworks.map(artwork => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}

export default ArtworkContainer;
