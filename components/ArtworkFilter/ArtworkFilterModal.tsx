import { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { useAppSelector, useAppDispatch } from '../../hooks/useAppStore';
import { closeArtworkFilterModal } from '../../store/artworkFilterModalSlice';
import useTailwindBreakpoints from '../../hooks/useTailwindBreakpoints';
import ArtworkFilter from './index';

function ArtworkFilterModal() {
  const dispatch = useAppDispatch();

  const isFilterOpen = useAppSelector(state => state.artworkFilterModal.isOpen);
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isFilterOpen);
  }, [isFilterOpen]);

  const { isScreenLarge } = useTailwindBreakpoints();
  useEffect(() => {
    dispatch(closeArtworkFilterModal());
  }, [isScreenLarge]);

  return (
    <Transition className="fixed top-0 left-0 h-screen w-screen" show={isFilterOpen}>
      <Transition.Child
        className="h-full w-full bg-black/20"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onClick={() => dispatch(closeArtworkFilterModal())}
      />

      <Transition.Child
        className="absolute bottom-0 h-[90%] w-full overflow-y-auto bg-white"
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="flex items-center justify-between px-6 pt-4">
          <span className="text-3xl font-bold">Filter</span>
          <Icon
            className="cursor-pointer text-2xl"
            icon="emojione-monotone:heavy-multiplication-x"
            onClick={() => dispatch(closeArtworkFilterModal())}
          />
        </div>
        <hr className="my-4 h-1 border-0 bg-gray-lightest" />
        <div className="px-6 pb-6">
          <ArtworkFilter />
        </div>

        {/*Buttons*/}
        <div className="sticky bottom-0 left-0 flex w-full space-x-3 bg-white px-6 py-5 drop-shadow-[3px_0px_3px_rgba(0,0,0,0.25)]">
          <button className="w-full border-2 border-black bg-white py-1 text-xl font-semibold uppercase text-black">
            Clear
          </button>
          <button className="w-full border-2 border-black bg-black py-1 text-xl font-semibold uppercase text-white">
            Save
          </button>
        </div>
      </Transition.Child>
    </Transition>
  );
}

export default ArtworkFilterModal;
