import { gql } from '@apollo/client';

const PRICE_RANGE_QUERY = gql`
  query {
    artworkPriceRange {
      minPrice
      maxPrice
    }
  }
`;

export default PRICE_RANGE_QUERY;
