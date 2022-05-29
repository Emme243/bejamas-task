import { ChangeEvent } from 'react';
import { useQuery } from '@apollo/client';
import CATEGORY_QUERY from '../../graphql/queries/categoryQuery';
import Checkbox from '../Inputs/Checkbox';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppStore';
import { addCategoryFilter, removeCategoryFilter } from '../../store/categoryFilterSlice';

function CategoryFilter() {
  const { data, loading, error } = useQuery(CATEGORY_QUERY);
  const categoryFilterValues = useAppSelector(state => state.categoryFilter.values);
  const dispatch = useAppDispatch();
  const handleCategoryFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (categoryFilterValues.includes(value)) dispatch(removeCategoryFilter(value));
    else dispatch(addCategoryFilter(value));
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
