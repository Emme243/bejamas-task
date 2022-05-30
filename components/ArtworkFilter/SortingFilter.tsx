import { ChangeEvent, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppStore';
import { setSortBy, setSortType, SortType } from '../../store/artworkFilterSlice';
import { useRouter } from 'next/router';
import useQueryRoute from '../../hooks/useQueryRoute';

function SortingFilter() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { setSortTypeToUrl, setSortByToUrl } = useQueryRoute();

  const sortBy = useAppSelector(state => state.artworkFilter.sortBy);
  const sortType = useAppSelector(state => state.artworkFilter.sortType);
  useEffect(() => {
    const sortByQuery = router.query.sortBy as string | undefined;
    const sortBy = sortByQuery || 'name';
    const sortTypeQuery = router.query.sortType;
    const sortType = (sortTypeQuery || 'ASC') as SortType;
    dispatch(setSortBy(sortBy));
    dispatch(setSortType(sortType));
  }, [dispatch, router.query.sortBy, router.query.sortType]);
  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = e.target.value;
    setSortByToUrl(newSortBy);
  };
  const handleSortTypeChange = () => {
    const newSortType = sortType === 'ASC' ? 'DESC' : 'ASC';
    setSortTypeToUrl(newSortType);
  };

  const iconBy = sortBy === 'name' ? 'alpha' : 'numeric';
  const iconType = sortType === 'ASC' ? '' : '-alt';
  const iconName = `bi:sort-${iconBy}-down${iconType}`;

  return (
    <>
      <Icon
        icon={iconName}
        className="cursor-pointer text-xl"
        onClick={() => handleSortTypeChange()}
      />
      <span className="text-gray-middle">Sort by</span>
      <select
        name="artwork-filter"
        id="artwork-filter"
        value={sortBy}
        onChange={handleSortByChange}
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </>
  );
}

export default SortingFilter;
