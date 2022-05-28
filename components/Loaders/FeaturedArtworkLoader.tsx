import React from 'react';
import ContentLoader from 'react-content-loader';

const FeaturedArtworkLoader = () => (
  <ContentLoader
    uniqueKey="featured-artwork-loader"
    className="w-full"
    viewBox="0 0 388 210"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
  >
    <rect x="1" y="150" rx="4" ry="4" width="271" height="9" />
    <rect x="2" y="165" rx="3" ry="3" width="119" height="6" />
    <rect x="0" y="0" rx="10" ry="10" width="388" height="140" />
  </ContentLoader>
);

export default FeaturedArtworkLoader;
