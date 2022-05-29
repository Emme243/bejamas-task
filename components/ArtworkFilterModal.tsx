import { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { useAppSelector, useAppDispatch } from '../hooks/useAppStore';
import { closeArtworkFilterModal } from '../store/artworkFilterSlice';
import useTailwindBreakpoints from '../hooks/useTailwindBreakpoints';
import ArtworkFilter from './ArtworkFilter';

function ArtworkFilterModal() {
  const dispatch = useAppDispatch();

  const isFilterOpen = useAppSelector(state => state.artworkFilter.isOpen);
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
        className="absolute bottom-0 h-[90%] w-full overflow-y-auto bg-white px-6 py-4"
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">Filter</span>
          <Icon
            className="cursor-pointer text-2xl"
            icon="emojione-monotone:heavy-multiplication-x"
            onClick={() => dispatch(closeArtworkFilterModal())}
          />
        </div>
        <hr className="my-4 h-1 border-0 bg-gray-lightest" />
        <ArtworkFilter />
      </Transition.Child>
    </Transition>
  );
}

export default ArtworkFilterModal;
