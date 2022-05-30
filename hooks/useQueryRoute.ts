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

  function setCategoriesToUrl(categories: string[]) {
    const newQuery: Query = { ...router.query, categories: categories.join(',') };
    if (categories.length === 0) delete newQuery.categories;
    setQueryParamsToUrl(newQuery);
  }

  function setCurrentPageToUrl(page: number) {
    const newQuery: Query = { ...router.query, currentPage: page.toString() };
    setQueryParamsToUrl(newQuery);
  }

  function setPriceRangeToUrl(priceRange: number[]) {
    const newQuery: Query = { ...router.query, priceRange: priceRange.join(',') };
    if (priceRange.length === 0) delete newQuery.priceRange;
    setQueryParamsToUrl(newQuery);
  }

  function setSortingToUrl(sortBy: string, sortType: SortType) {
    const query: Query = { ...router.query, sortBy, sortType };
    setQueryParamsToUrl(query);
  }

  return {
    setCategoriesToUrl,
    setCurrentPageToUrl,
    setPriceRangeToUrl,
    setSortingToUrl,
  };
}

export default useQueryRoute;
