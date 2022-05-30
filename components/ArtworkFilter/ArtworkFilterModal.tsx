import { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import ArtworkFilter from './index';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppStore';
import useTailwindBreakpoints from '../../hooks/useTailwindBreakpoints';
import { closeModalFilter } from '../../store/artworkFilterSlice';
import useQueryRoute from '../../hooks/useQueryRoute';
import SortingFilter from './SortingFilter';

function ArtworkFilterModal() {
  const dispatch = useAppDispatch();
  const { resetQueryParams } = useQueryRoute();

  const isFilterModalOpen = useAppSelector(state => state.artworkFilter.isModalOpen);
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isFilterModalOpen);
  }, [isFilterModalOpen]);

  const { isScreenLarge } = useTailwindBreakpoints();
  useEffect(() => {
    dispatch(closeModalFilter());
  }, [dispatch, isScreenLarge]);

  return (
    <Transition className="fixed top-0 left-0 z-30 h-screen w-screen" show={isFilterModalOpen}>
      <Transition.Child
        className="h-full w-full bg-black/20"
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onClick={() => dispatch(closeModalFilter())}
      />

      <Transition.Child
        className="absolute bottom-0 flex h-[90%] w-full flex-col overflow-y-auto bg-white"
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
            onClick={() => dispatch(closeModalFilter())}
          />
        </div>
        <hr className="my-4 h-1 border-0 bg-gray-lightest" />
        <div className="px-6 pb-6">
          <SortingFilter />
          <hr className="my-6 h-[1px] border-none bg-gray-lightest " />
          <ArtworkFilter />
        </div>

        {/*Buttons*/}
        <div className="sticky bottom-0 left-0 mt-auto flex w-full space-x-3 bg-white px-6 py-5 drop-shadow-[3px_0px_3px_rgba(0,0,0,0.25)]">
          <button
            className="w-full border-2 border-black bg-white py-1 text-xl font-semibold uppercase text-black"
            onClick={resetQueryParams}
          >
            Clear
          </button>
          <button
            className="w-full border-2 border-black bg-black py-1 text-xl font-semibold uppercase text-white"
            onClick={() => dispatch(closeModalFilter())}
          >
            Save
          </button>
        </div>
      </Transition.Child>
    </Transition>
  );
}

export default ArtworkFilterModal;
