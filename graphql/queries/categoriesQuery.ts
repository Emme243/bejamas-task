import { gql } from '@apollo/client';

const CATEGORIES_QUERY = gql`
  query {
    categories
  }
`;

export default CATEGORIES_QUERY;
