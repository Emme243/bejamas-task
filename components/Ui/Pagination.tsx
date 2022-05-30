import { Icon } from '@iconify/react';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  return (
    <div className="space-x-4 text-gray-middle">
      {currentPage !== 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>
          <Icon icon="akar-icons:chevron-left"></Icon>
        </button>
      )}

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`xs:text-lg sm:text-xl ${currentPage === page && 'text-black'}`}
          >
            {page}
          </button>
        );
      })}

      {currentPage !== totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>
          <Icon icon="akar-icons:chevron-right"></Icon>
        </button>
      )}
    </div>
  );
}

export default Pagination;
