import useRouteQuery from '../../hooks/useRouteQuery';

function ArtworkContainer() {
  const { sortBy, sortType, priceRangeQueryValue, categoryQueryValue } = useRouteQuery();

  const categories: string[] = categoryQueryValue?.split(',') || [];
  const priceRange: string[] = priceRangeQueryValue?.split(',') || [];

  return (
    <>
      <div>
        <div>
          Categories -
          {categories.map(category => (
            <span key={category}>{category},</span>
          ))}
        </div>
        <div>
          Price Range -
          {priceRange.map(price => (
            <span key={price}>{price},</span>
          ))}
        </div>
        <div>Sort by - {sortBy}</div>
        <div>Sort type - {sortType}</div>
      </div>
    </>
  );
}

export default ArtworkContainer;
