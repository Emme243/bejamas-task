import client from '../apollo-client';
import { gql } from '@apollo/client';

async function fetchFeaturedArtwork() {
  const featuredArtworkQuery = gql`
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
  const {
    data: { featuredArtwork },
  } = await client.query({ query: featuredArtworkQuery });
  return featuredArtwork;
}

export { fetchFeaturedArtwork };
