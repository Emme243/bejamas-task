import React from 'react';
import ContentLoader from 'react-content-loader';

interface PropsArtworkLoader {
  position: number;
  screenSizeName: 'sm' | 'lg';
}

const ArtworkLoader = ({ position, screenSizeName }: PropsArtworkLoader) => (
  <ContentLoader
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    uniqueKey={`artwork-loader-${screenSizeName}-${position}`}
    viewBox="0 0 300 440"
  >
    <rect x="3" y="3" rx="10" ry="10" width="295" height="370" />
    <rect x="6" y="385" rx="4" ry="4" width="192" height="20" />
    <rect x="4" y="415" rx="4" ry="4" width="139" height="20" />
  </ContentLoader>
);

const ArtworksLoader = () => {
  return (
    <>
      <div className="space-y-3 sm:hidden">
        {Array.from({ length: 2 }).map((_, i) => (
          <ArtworkLoader key={i} position={i} screenSizeName="sm" />
        ))}
      </div>

      <div className="hidden gap-7 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <ArtworkLoader key={i} position={i} screenSizeName="lg" />
        ))}
      </div>
    </>
  );
};

export default ArtworksLoader;
