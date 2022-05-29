import { ChangeEvent } from 'react';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppStore';
import { setSortBy, toggleSortType } from '../../store/artworkSortingSlice';

function ArtworkSorting() {
  const dispatch = useDispatch();
  const sortBy = useAppSelector(state => state.artworkSorting.sortBy);
  const sortType = useAppSelector(state => state.artworkSorting.sortType);

  const iconBy = sortBy === 'name' ? 'alpha' : 'numeric';
  const iconType = sortType === 'ASC' ? '' : '-alt';
  const iconName = `bi:sort-${iconBy}-down${iconType}`;

  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;
    dispatch(setSortBy(sortBy));
  };

  return (
    <>
      <Icon
        icon={iconName}
        className="cursor-pointer text-xl"
        onClick={() => dispatch(toggleSortType())}
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

export default ArtworkSorting;
