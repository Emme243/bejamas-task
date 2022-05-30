import { ChangeEvent, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Checkbox from '../Inputs/Checkbox';
import CATEGORY_QUERY from '../../graphql/queries/categoryQuery';
import { setCategories } from '../../store/artworkFilterSlice';
import useQueryRoute from '../../hooks/useQueryRoute';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppStore';

function CategoryFilter() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { setCategoriesToUrl } = useQueryRoute();
  const { data, loading, error } = useQuery(CATEGORY_QUERY);

  const categoryFilter = useAppSelector(state => state.artworkFilter.categories);
  useEffect(() => {
    const categoryQuery = router.query.categories as string | undefined;
    const categories = categoryQuery ? categoryQuery.split(',') : [];
    dispatch(setCategories(categories));
  }, [dispatch, router.query.categories]);
  const handleCategoryFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: category } = e.target;
    const categories = categoryFilter.includes(category)
      ? categoryFilter.filter(c => c !== category)
      : [...categoryFilter, category];
    setCategoriesToUrl(categories);
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error getting categories :(</p>;

  const categories = [...(data.categories as string[])].sort();
  return (
    <>
      <h3 className="font-bold">Category</h3>
      <div className="mt-3 space-y-3">
        {categories.map(category => (
          <Checkbox
            key={category}
            onChange={handleCategoryFilterChange}
            isChecked={categoryFilter.includes(category)}
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
