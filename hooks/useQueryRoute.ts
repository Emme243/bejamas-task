import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Query {
  categories?: string;
  currentPage?: string;
  priceRange?: string;
  sortBy?: string;
  sortType?: 'ASC' | 'DESC';
}

function useQueryRoute() {
  const router = useRouter();
  const [categories, setCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [priceRange, setPriceRange] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortType, setSortType] = useState<'ASC' | 'DESC'>('DESC');

  useEffect(() => {
    console.log('hola 1');
    const query = queryStringToObject(router.asPath.substring(2));
    setCategories(query.categories ? query.categories.split(',') : []);
    setCurrentPage(query.currentPage ? +query.currentPage : 1);
    setPriceRange(query.priceRange ? query.priceRange.split(',').map(Number) : []);
    setSortBy(query.sortBy || 'name');
    setSortType(query.sortType || 'ASC');
  }, [router.asPath]);

  function setPageToUrl(page: number) {
    const query = { ...router.query, currentPage: page.toString() };
    router.push(`/?${objectToQueryString(query)}`, undefined, { shallow: true });
  }

  function queryStringToObject(queryString: string): Query {
    const queryObject: any = {};
    const queryArray = queryString.split('&');
    queryArray.forEach((query: string) => {
      const [key, value] = query.split('=');
      queryObject[key] = value;
    });
    return queryObject;
  }

  function objectToQueryString(queryObject: { [key: string]: string }): string {
    const queryArray = Object.keys(queryObject).map((key: string) => `${key}=${queryObject[key]}`);
    return queryArray.join('&');
  }

  return {
    categories,
    currentPage,
    priceRange,
    sortBy,
    sortType,
    setPageToUrl,
  };
}

export default useQueryRoute;
