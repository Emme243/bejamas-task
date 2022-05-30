import CategoryFilter from './CategoryFilter';
import PriceRangeFilter from './PriceRangeFilter';

interface Props {
  className?: string;
}

function ArtworkFilter({ className }: Props) {
  return (
    <div className={`text-xl ${className}`}>
      <CategoryFilter />
      <hr className="my-6 h-[1px] border-none bg-gray-lightest " />
      <PriceRangeFilter />
    </div>
  );
}

export default ArtworkFilter;
