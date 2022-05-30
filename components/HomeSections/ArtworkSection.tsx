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
        <ArtworkFilter className="hidden flex-[0_0_25%] lg:block" />
        <ArtworkContainer className="mt-3 lg:mt-0" />
      </div>
    </>
  );
}

export default ArtworkSection;
