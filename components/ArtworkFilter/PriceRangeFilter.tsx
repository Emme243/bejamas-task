import { useQuery } from '@apollo/client';
import { ChangeEvent, useEffect } from 'react';
import PRICE_RANGE_QUERY from '../../graphql/queries/priceRangeQuery';
import Checkbox from '../Inputs/Checkbox';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppStore';
import { useRouter } from 'next/router';
import { setPriceRange } from '../../store/artworkFilterSlice';
import useQueryRoute from '../../hooks/useQueryRoute';

interface ArtworkPriceRange {
  minPrice: number;
  maxPrice: number;
}

const DIVISION_PRICE = 400;

function PriceRangeFilter() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { setPriceRangeToUrl } = useQueryRoute();
  const { data, loading, error } = useQuery(PRICE_RANGE_QUERY);

  const priceRangeFilter = useAppSelector(state => state.artworkFilter.priceRange);
  useEffect(() => {
    const priceRangeQuery = router.query.priceRange as string | undefined;
    const priceRange = priceRangeQuery ? priceRangeQuery.split(',').map(Number) : [];
    dispatch(setPriceRange(priceRange));
  }, [dispatch, router.query.priceRange]);
  const handlePriceFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked: isChecked, value: priceRangeValue } = e.target;
    const priceRange = isChecked ? priceRangeValue.split(',').map(Number) : [];
    setPriceRangeToUrl(priceRange);
  };

  if (loading) return <p>Loading price range...</p>;
  if (error) return <p>Error getting price range :(</p>;

  const { maxPrice } = data.artworkPriceRange as ArtworkPriceRange;
  const numberOfCheckboxes = Math.floor(maxPrice / DIVISION_PRICE) + 1;
  const isCheckboxChecked = (fromPrice: number, toPrice: number) =>
    priceRangeFilter.includes(fromPrice) && priceRangeFilter.includes(toPrice);
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
