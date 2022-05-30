import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import ArtworkFilter from '../ArtworkFilter';
import ArtworkFilterModal from '../ArtworkFilter/ArtworkFilterModal';
import SortingFilter from '../ArtworkFilter/SortingFilter';
import ArtworkContent from '../ArtworkContent';
import { openModalFilter } from '../../store/artworkFilterSlice';
import useQueryRoute from '../../hooks/useQueryRoute';

function ArtworkSection() {
  const dispatch = useDispatch();
  const { resetQueryParams } = useQueryRoute();

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
        <div className="hidden flex-[0_0_25%] lg:block">
          <ArtworkFilter className="w-full" />
          <hr className="my-6 h-[1px] border-none bg-gray-lightest " />
          <button
            className="w-1/2 border border-black py-1 text-xl font-semibold"
            onClick={resetQueryParams}
          >
            Clear
          </button>
        </div>
        <ArtworkContent className="mt-3 flex-grow lg:mt-0" />
      </div>
    </>
  );
}

export default ArtworkSection;
