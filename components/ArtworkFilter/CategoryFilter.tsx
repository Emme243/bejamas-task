import { useQuery } from '@apollo/client';
import CATEGORIES_QUERY from '../../graphql/queries/categoriesQuery';
import { ChangeEvent, useState } from 'react';
import { Icon } from '@iconify/react';

function CategoryFilter() {
  const { data, loading, error } = useQuery(CATEGORIES_QUERY);
  const [categoryFilterValues, setCategoryFilterValues] = useState<string[]>([]);
  const handleCategoryFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (categoryFilterValues.includes(value))
      setCategoryFilterValues(categoryFilterValues.filter(item => item !== value));
    else setCategoryFilterValues([...categoryFilterValues, value]);
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error getting categories :(</p>;

  const categories = data.categories as string[];
  return (
    <>
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
              checked={categoryFilterValues.includes(category)}
              onChange={handleCategoryFilter}
            />
            <Icon
              icon={`carbon:checkbox${categoryFilterValues.includes(category) ? '-checked' : ''}`}
              className="cursor-pointer text-2xl"
            />
            <span className="capitalize">{category}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoryFilter;
