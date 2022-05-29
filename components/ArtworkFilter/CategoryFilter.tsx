import { useQuery } from '@apollo/client';
import CATEGORIES_QUERY from '../../graphql/queries/categoriesQuery';
import { ChangeEvent, useState } from 'react';
import Checkbox from '../Inputs/Checkbox';

function CategoryFilter() {
  const { data, loading, error } = useQuery(CATEGORIES_QUERY);
  const [categoryFilterValues, setCategoryFilterValues] = useState<string[]>([]);
  const handleCategoryFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
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
          <Checkbox
            key={category}
            onChange={handleCategoryFilterChange}
            isChecked={categoryFilterValues.includes(category)}
            value={category}
          >
            <span className="capitalize">{category}</span>
          </Checkbox>
        ))}
      </div>
    </>
  );
}

export default CategoryFilter;
