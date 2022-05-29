import { useQuery } from '@apollo/client';
import { useState } from 'react';
import PRICE_RANGE_QUERY from '../../graphql/queries/priceRangeQuery';

interface ArtworkPriceRange {
  minPrice: number;
  maxPrice: number;
}

function PriceRangeFilter() {
  const { data, loading, error } = useQuery(PRICE_RANGE_QUERY);
  const [priceRangeFilterValues, setPriceRangeFilterValues] = useState<number[]>([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { minPrice, maxPrice } = data.artworkPriceRange as ArtworkPriceRange;
  return (
    <>
      <h3 className="font-bold">Price Range</h3>
      {minPrice}
    </>
  );
}

export default PriceRangeFilter;
