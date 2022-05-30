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
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { setCurrentPageToUrl } = useQueryRoute();

  const currentPageFilter = useAppSelector(state => state.artworkFilter.currentPage);
  useEffect(() => {
    const currentPageQuery = router.query.currentPage as string | undefined;
    const currentPage = currentPageQuery ? parseInt(currentPageQuery) : 1;
    dispatch(setCurrentPage(currentPage));
  }, [dispatch, router.query.currentPage]);

  const totalPages = Math.ceil(totalOfArtworks / artworksPerPage);

  return (
    <>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPageFilter}
        onPageChange={setCurrentPageToUrl}
      />
    </>
  );
}

export default PaginationFilter;
