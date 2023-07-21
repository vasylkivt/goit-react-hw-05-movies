import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonMovieDetails = props => {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  const width = 850;
  const height = 480;
  const padding = 50;

  return (
    <ContentLoader
      width={viewportWidth}
      height={height + 40}
      title="Loading movie details..."
      {...props}
    >
      <rect x="0" y="10" rx="10" ry="10" width={width} height={height} />

      <rect x={width + padding} y="10" rx="5" ry="5" width="400" height="30" />
      <rect x={width + padding} y="60" rx="5" ry="5" width="300" height="20" />
      <rect x={width + padding} y="100" rx="5" ry="5" width="300" height="20" />
      <rect x={width + padding} y="140" rx="5" ry="5" width="300" height="20" />
      <rect x={width + padding} y="210" rx="5" ry="5" width="100" height="20" />
      <rect
        x={width + padding}
        y="250"
        rx="5"
        ry="5"
        width="400"
        height="200"
      />
    </ContentLoader>
  );
};
