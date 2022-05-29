import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';

function ArtworkFilter() {
  return (
    <div className="text-xl">
      <CategoryFilter />
      <hr className="my-6 h-[1px] border-none bg-gray-lightest " />
      <PriceRangeFilter />
    </div>
  );
}

export default ArtworkFilter;
