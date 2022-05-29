import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { openArtworkFilterModal } from '../../store/artworkFilterModalSlice';
import ArtworkFilter from '../ArtworkFilter';
import ArtworkFilterModal from '../ArtworkFilter/ArtworkFilterModal';
import ArtworkSorting from '../ArtworkFilter/ArtworkSorting';
import ArtworkContainer from '../ArtworkContainer';

function ArtworkSection() {
  const dispatch = useDispatch();

  return (
    <>
      {/*FILTERING AND SORTING OPTIONS*/}
      <div className="sticky top-0 z-20 flex items-center justify-between bg-white py-3">
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
          <ArtworkSorting />
        </div>
      </div>
      {/*DISPLAYED ARTWORKS*/}
      <div className="lg:hidden">
        <ArtworkFilterModal />
      </div>
      <div className="lg:mt-8 lg:flex lg:justify-between lg:space-x-6">
        <div className="hidden lg:block lg:w-1/2 xl:w-1/4">
          <ArtworkFilter />
        </div>
        <div className="mt-3 lg:mt-0 lg:flex-shrink">
          <ArtworkContainer />
        </div>
      </div>
    </>
  );
}

export default ArtworkSection;
