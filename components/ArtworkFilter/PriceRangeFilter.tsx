import { useQuery } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import PRICE_RANGE_QUERY from '../../graphql/queries/priceRangeQuery';
import Checkbox from '../Inputs/Checkbox';

interface ArtworkPriceRange {
  minPrice: number;
  maxPrice: number;
}

const DIVISION_PRICE = 400;

function PriceRangeFilter() {
  const { data, loading, error } = useQuery(PRICE_RANGE_QUERY);
  const [priceRangeFilterValues, setPriceRangeFilterValues] = useState<number[]>([]);
  const handlePriceFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) setPriceRangeFilterValues(value.split(',').map(Number));
    else setPriceRangeFilterValues([]);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { maxPrice } = data.artworkPriceRange as ArtworkPriceRange;
  const numberOfCheckboxes = Math.floor(maxPrice / DIVISION_PRICE) + 1;
  const isCheckboxChecked = (fromPrice: number, toPrice: number) =>
    priceRangeFilterValues.includes(fromPrice) && priceRangeFilterValues.includes(toPrice);
  return (
    <>
      <h3 className="font-bold">Price Range</h3>
      <div className="mt-3 space-y-3">
        {Array.from({ length: numberOfCheckboxes }, (_, index) => {
          const fromPrice = index * DIVISION_PRICE;
          const toPrice = (index + 1) * DIVISION_PRICE;
          const isFirstCheckbox = index === 0;
          const isLastCheckbox = index === numberOfCheckboxes - 1;

          return (
            <Checkbox
              key={index}
              onChange={handlePriceFilterChange}
              value={`${fromPrice},${toPrice}`}
              isChecked={isCheckboxChecked(fromPrice, toPrice)}
            >
              <span>
                {isFirstCheckbox
                  ? `Lower than ${toPrice}`
                  : isLastCheckbox
                  ? `More than ${fromPrice}`
                  : `${fromPrice} - ${toPrice}`}
              </span>
            </Checkbox>
          );
        })}
      </div>
    </>
  );
}

export default PriceRangeFilter;
