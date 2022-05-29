import { gql } from '@apollo/client';

const ARTWORK_QUERY = gql`
  query ($sort: SortInput, $limit: Int, $page: Int, $filter: [FilterInput]) {
    displayedArtworks(sort: $sort, limit: $limit, page: $page, filter: $filter) {
      total
      artworks {
        id
        category
        name
        price
        isBestseller
        details {
          src {
            portrait
            landscape
          }
        }
      }
    }
  }
`;

export default ARTWORK_QUERY;
