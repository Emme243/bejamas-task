import { gql } from '@apollo/client';

const CATEGORY_QUERY = gql`
  query {
    categories
  }
`;

export default CATEGORY_QUERY;
