import { Icon } from '@iconify/react';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const buttonSizeClasses = 'min-h-[48px] min-w-[48px]';
const arrowButtonClasses = 'inline-flex items-center justify-center text-lg';
function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  return (
    <div className="text-gray-middle">
      {currentPage !== 1 && (
        <button
          className={`${arrowButtonClasses} ${buttonSizeClasses}`}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Go to previous page"
        >
          <Icon icon="akar-icons:chevron-left"></Icon>
        </button>
      )}

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`xs:text-lg sm:text-xl ${buttonSizeClasses} ${
              currentPage === page && 'text-black'
            }`}
          >
            {page}
          </button>
        );
      })}

      {currentPage !== totalPages && (
        <button
          className={`${arrowButtonClasses} ${buttonSizeClasses}`}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Go to next page"
        >
          <Icon icon="akar-icons:chevron-right"></Icon>
        </button>
      )}
    </div>
  );
}

export default Pagination;
