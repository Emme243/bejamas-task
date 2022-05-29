import { useRouter } from 'next/router';
import { useAppSelector } from './useAppStore';
import { useEffect } from 'react';

interface Query {
  [key: string]: any;
}

const useRouteQuery = () => {
  const router = useRouter();

  const categoryQueryValue = useAppSelector(state => state.categoryFilter.queryRoute);
  const priceRangeQueryValue = useAppSelector(state => state.priceRangeFilter.queryRoute);
  const sortBy = useAppSelector(state => state.artworkSorting.sortBy);
  const sortType = useAppSelector(state => state.artworkSorting.sortType);

  useEffect(() => {
    const query = {
      category: categoryQueryValue,
      priceRange: priceRangeQueryValue,
      sortBy,
      sortType,
    };
    updateRouteQuery(query);
  }, [categoryQueryValue, priceRangeQueryValue, sortBy, sortType]);

  const updateRouteQuery = (newQuery: Query, forceUpdate = false) => {
    const queryString = Object.entries(newQuery)
      .filter(([, value]) => !!value)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    router.push('/?' + queryString, undefined, { shallow: true });
  };

  return { categoryQueryValue, priceRangeQueryValue, sortBy, sortType };
};

export default useRouteQuery;
