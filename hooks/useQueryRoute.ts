import { useState } from 'react';
import { useRouter } from 'next/router';
import { SortType } from '../store/artworkFilterSlice';

interface Query {
  categories?: string;
  currentPage?: string;
  priceRange?: string;
  sortBy?: string;
  sortType?: string;
}

function useQueryRoute() {
  const router = useRouter();
  const [categories] = useState<string[]>([]);
  const [currentPage] = useState<number>(1);
  const [priceRange] = useState<number[]>([]);
  const [sortBy] = useState<string>('name');
  const [sortType] = useState<'ASC' | 'DESC'>('DESC');

  function setQueryParamsToUrl(query: Query): void {
    const newQuery = { ...router.query, ...query };
    const queryString = Object.entries(newQuery)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    router.push(`/?${queryString}`, undefined, { shallow: true });
    console.log(router.query);
  }

  function setCategoriesToUrl(categories: string[]) {
    const query: Query = { categories: categories.join(',') };
    if (categories.length === 0) delete query.categories;
    setQueryParamsToUrl(query);
  }

  function setCurrentPageToUrl(page: number) {
    const query: Query = { currentPage: page.toString() };
    if (!page) delete query.currentPage;
    setQueryParamsToUrl(query);
  }

  function setPriceRangeToUrl(priceRange: number[]) {
    const query: Query = { priceRange: priceRange.join(',') };
    if (priceRange.length === 0) delete query.priceRange;
    setQueryParamsToUrl(query);
  }

  function setSortingToUrl(sortBy: string, sortType: SortType) {
    const query: Query = { sortBy, sortType };
    setQueryParamsToUrl(query);
  }

  return {
    setCategoriesToUrl,
    setCurrentPageToUrl,
    setPriceRangeToUrl,
    setSortingToUrl,
    categories,
    currentPage,
    priceRange,
    sortBy,
    sortType,
  };
}

export default useQueryRoute;
