import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonMovie = () => {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  let width = 1440;
  let columns = 4;
  const padding = 20;

  if (viewportWidth < 703) {
    width = viewportWidth - padding;
    columns = 1;
  } else if (viewportWidth < 1040) {
    width = viewportWidth - padding;

    columns = 2;
  } else if (viewportWidth < 1376) {
    width = viewportWidth - padding;

    columns = 3;
  }

  const rows = 3;
  const coverWidth = (width - padding * (columns + 1)) / columns;
  const coverHeight = (coverWidth * 16) / 9;
  const speed = 1;

  const coverHeightWithPadding = coverHeight + padding;
  const coverWidthWithPadding = coverWidth + padding;
  const initial = 70;
  const covers = Array(columns * rows).fill(1);

  return (
    <ContentLoader
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
    >
      <rect
        x="0"
        y="0"
        rx="6"
        ry="6"
        width={coverWidthWithPadding}
        height="50"
      />

      {covers.map((_, i) => {
        let vy = Math.floor(i / columns) * coverHeightWithPadding + initial;

        let vx =
          (i * coverWidthWithPadding) % (columns * coverWidthWithPadding);

        return (
          <rect
            key={i}
            x={vx}
            y={vy}
            rx="6"
            ry="6"
            width={coverWidth}
            height={coverHeight}
          />
        );
      })}
    </ContentLoader>
  );
};
