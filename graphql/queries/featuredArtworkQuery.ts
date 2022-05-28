import { gql } from '@apollo/client';

const FEATURED_ARTWORK_QUERY = gql`
  query {
    featuredArtwork {
      id
      imageUrl
      name
      description
      category
    }
  }
`;

export default FEATURED_ARTWORK_QUERY;
