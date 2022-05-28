import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { openArtworkFilterModal } from '../../store/artworkFilterSlice';
import ArtworkFilter from '../ArtworkFilter';
import ArtworkFilterModal from '../ArtworkFilterModal';

function ArtworkSection() {
  const dispatch = useDispatch();

  return (
    <>
      {/*FILTERING AND SORTING OPTIONS*/}
      <div className="flex items-center justify-between">
        <div className="space-x-2 text-xl">
          <span className="font-bold">Photography</span>
          <span className="font-semibold">/</span>
          <span className="text-gray-middle">Premium Photos</span>
        </div>
        <div
          className="cursor-pointer rounded-md border border-black text-2xl text-black lg:hidden"
          onClick={() => dispatch(openArtworkFilterModal())}
        >
          <Icon icon="system-uicons:filtering" />
        </div>
        <div className="hidden items-center space-x-3 text-lg lg:flex">
          <Icon icon="akar-icons:arrow-up-down" className="cursor-pointer text-xl" />
          <span className="text-gray-middle">Sort by</span>
          <select name="artwork-filter" id="artwork-filter">
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      {/*DISPLAYED ARTWORKS*/}
      <div className="lg:hidden">
        <ArtworkFilterModal />
      </div>
      <div className="lg:flex">
        <div className="hidden lg:block">
          <ArtworkFilter />
        </div>
        <div>Aquí van las img</div>
      </div>
    </>
  );
}

export default ArtworkSection;
