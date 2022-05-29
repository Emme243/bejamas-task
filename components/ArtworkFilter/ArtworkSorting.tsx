import { Icon } from '@iconify/react';

function ArtworkSorting() {
  return (
    <>
      <Icon icon="akar-icons:arrow-up-down" className="cursor-pointer text-xl" />
      <span className="text-gray-middle">Sort by</span>
      <select name="artwork-filter" id="artwork-filter">
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </>
  );
}

export default ArtworkSorting;
