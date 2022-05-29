import { gql } from '@apollo/client';

const FEATURED_ARTWORK_QUERY = gql`
  query getFeaturedArtwork {
    featuredArtwork {
      id
      category
      description
      price
      name
      details {
        width
        height
        size
        src {
          landscape
        }
        recommendations {
          name
          src {
            portrait
          }
        }
      }
    }
  }
`;

export default FEATURED_ARTWORK_QUERY;
