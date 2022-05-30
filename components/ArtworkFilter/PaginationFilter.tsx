import Pagination from '../Ui/Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppStore';
import { useEffect } from 'react';
import { setCurrentPage } from '../../store/artworkFilterSlice';
import { useRouter } from 'next/router';
import useQueryRoute from '../../hooks/useQueryRoute';

interface Props {
  totalOfArtworks: number;
  artworksPerPage: number;
}

function PaginationFilter({ totalOfArtworks, artworksPerPage }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { setCurrentPageToUrl } = useQueryRoute();

  const currentPageFilter = useAppSelector(state => state.artworkFilter.currentPage);
  useEffect(() => {
    const currentPageQuery = router.query.currentPage as string | undefined;
    const currentPage = currentPageQuery ? parseInt(currentPageQuery) : 1;
    dispatch(setCurrentPage(currentPage));
  }, [dispatch, router.query.currentPage]);

  const totalOfPages = Math.ceil(totalOfArtworks / artworksPerPage);

  return (
    <Pagination
      totalPages={totalOfPages}
      currentPage={currentPageFilter}
      handlePageChange={setCurrentPageToUrl}
    />
  );
}

export default PaginationFilter;
