import { useState, ChangeEvent } from 'react';
import { useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import CATEGORIES_QUERY from '../graphql/queries/categoriesQuery';
import PRICE_RANGE_QUERY from '../graphql/queries/priceRangeQuery';

function ArtworkFilter() {
  const categoriesResponse = useQuery(CATEGORIES_QUERY);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const handleCategoryFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (categoryFilter.includes(value))
      setCategoryFilter(categoryFilter.filter(item => item !== value));
    else setCategoryFilter([...categoryFilter, value]);
  };

  const priceRangeResponse = useQuery(PRICE_RANGE_QUERY);

  const loading = categoriesResponse.loading || priceRangeResponse.loading;
  const error = categoriesResponse.error || priceRangeResponse.error;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const categories = categoriesResponse.data.categories as string[];
  return (
    <div className="text-xl">
      <h3 className="font-bold">Category</h3>
      <div className="mt-3 space-y-3">
        {categories.map((category, idx) => (
          <div key={idx} className="relative flex items-center space-x-3">
            <input
              type="checkbox"
              id={`category-${idx}`}
              name="category"
              className="absolute top-0 left-0 h-full w-full opacity-0"
              value={category}
              checked={categoryFilter.includes(category)}
              onChange={handleCategoryFilter}
            />
            <Icon
              icon={`carbon:checkbox${categoryFilter.includes(category) ? '-checked' : ''}`}
              className="cursor-pointer text-2xl"
            />
            <span className="capitalize">{category}</span>
          </div>
        ))}
      </div>
      <hr className="my-6 h-1 border-none bg-gray-lightest " />
      <h3 className="font-bold">Price Range</h3>
    </div>
  );
}

export default ArtworkFilter;
