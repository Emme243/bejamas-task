import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import ArtworkFilter from '../ArtworkFilter';
import ArtworkFilterModal from '../ArtworkFilter/ArtworkFilterModal';
import SortingFilter from '../ArtworkFilter/SortingFilter';
import ArtworkContent from '../ArtworkContent';
import { openModalFilter } from '../../store/artworkFilterSlice';

function ArtworkSection() {
  const dispatch = useDispatch();

  return (
    <>
      {/*FILTERING AND SORTING OPTIONS*/}
      <div className="flex items-center justify-between bg-white py-3">
        <div className="space-x-2 text-xl">
          <span className="font-bold">Photography</span>
          <span className="font-semibold">/</span>
          <span className="text-gray-middle">Premium Photos</span>
        </div>
        <div
          className="cursor-pointer rounded-md border border-black text-2xl text-black lg:hidden"
          onClick={() => dispatch(openModalFilter())}
        >
          <Icon icon="system-uicons:filtering" />
        </div>
        <div className="hidden items-center space-x-3 text-lg lg:flex">
          <SortingFilter />
        </div>
      </div>
      {/*DISPLAYED ARTWORKS*/}
      <div className="lg:hidden">
        <ArtworkFilterModal />
      </div>
      <div className="lg:mt-8 lg:flex lg:justify-between lg:space-x-6">
        <ArtworkFilter className="hidden flex-[0_0_25%] lg:block" />
        <ArtworkContent className="mt-3 flex-grow lg:mt-0" />
      </div>
    </>
  );
}

export default ArtworkSection;
