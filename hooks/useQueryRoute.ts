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

  function setQueryParamsToUrl(query: Query): void {
    const queryString = Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    router.push(`/?${queryString}`, undefined, { shallow: true });
  }

  function resetQueryParams() {
    setQueryParamsToUrl({});
  }

  function setCategoriesToUrl(categories: string[]) {
    const query: Query = { ...router.query, categories: categories.join(','), currentPage: '1' };
    if (categories.length === 0) delete query.categories;
    setQueryParamsToUrl(query);
  }

  function setCurrentPageToUrl(page: number) {
    const query: Query = { ...router.query, currentPage: page.toString() };
    setQueryParamsToUrl(query);
  }

  function setPriceRangeToUrl(priceRange: number[]) {
    const query: Query = { ...router.query, priceRange: priceRange.join(','), currentPage: '1' };
    if (priceRange.length === 0) delete query.priceRange;
    setQueryParamsToUrl(query);
  }

  function setSortByToUrl(sortBy: string) {
    const query: Query = { ...router.query, sortBy };
    setQueryParamsToUrl(query);
  }

  function setSortTypeToUrl(sortType: SortType) {
    const query: Query = { ...router.query, sortType };
    setQueryParamsToUrl(query);
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
