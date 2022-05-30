import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';

function ArtworkFilter({ className }: { className?: string }) {
  return (
    <div className={`text-xl ${className}`}>
      <CategoryFilter />
      <hr className="my-6 h-[1px] border-none bg-gray-lightest " />
      <PriceRangeFilter />
    </div>
  );
}

export default ArtworkFilter;
