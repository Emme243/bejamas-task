import React from 'react';
import ContentLoader from 'react-content-loader';

const FeaturedArtworkLoader = () => (
  <ContentLoader
    backgroundColor="#f0f0f0"
    className="w-full"
    foregroundColor="#dedede"
    uniqueKey="featured-artwork-loader"
    viewBox="0 0 400 210"
  >
    <rect x="1" y="150" rx="4" ry="4" width="271" height="9" />
    <rect x="2" y="165" rx="3" ry="3" width="119" height="6" />
    <rect x="0" y="0" rx="10" ry="10" width="388" height="140" />
  </ContentLoader>
);

export default FeaturedArtworkLoader;
