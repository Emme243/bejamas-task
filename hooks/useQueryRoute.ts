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

  function setQueryParamsToUrl(query: Query, queryName: keyof Query, shouldRemove = false): void {
    const newQuery: Query = { ...router.query, ...query };
    if (shouldRemove) delete newQuery[queryName];
    const queryString = Object.entries(newQuery)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    router.push(`/?${queryString}`, undefined, { shallow: true });
  }

  function resetQueryParams() {
    router.push('/?', undefined, { shallow: true });
  }

  function setCategoriesToUrl(categories: string[]) {
    const query: Query = { categories: categories.join(',') };
    setQueryParamsToUrl(query, 'categories', categories.length === 0);
  }

  function setCurrentPageToUrl(page: number) {
    const query: Query = { currentPage: page.toString() };
    setQueryParamsToUrl(query, 'currentPage');
  }

  function setPriceRangeToUrl(priceRange: number[]) {
    const query: Query = { priceRange: priceRange.join(',') };
    setQueryParamsToUrl(query, 'priceRange', priceRange.length === 0);
  }

  function setSortByToUrl(sortBy: string) {
    const query: Query = { sortBy };
    setQueryParamsToUrl(query, 'sortBy');
  }

  function setSortTypeToUrl(sortType: SortType) {
    const query: Query = { sortType };
    setQueryParamsToUrl(query, 'sortType');
  }

  return {
    setCategoriesToUrl,
    setCurrentPageToUrl,
    setPriceRangeToUrl,
    setSortByToUrl,
    setSortTypeToUrl,
    resetQueryParams,
  };
}

export default useQueryRoute;
