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

// import React from 'react';
// import ContentLoader from 'react-content-loader';

// const SkeletonMovie = ({
//   row = 3,
//   column = 4,
//   width = 1440,
//   padding = 15,
//   borderRadius = 4,
//   ...props
// }) => {
//   const list = [];

//   let height;

//   for (let i = 1; i <= row; i++) {
//     const itemWidth = (width - padding * (column + 1)) / column;

//     const height1 = (itemWidth * 16) / 9;

//     const height2 = 20;

//     const height3 = 20;

//     const space =
//       padding +
//       (padding + height1) +
//       (padding / 2 + height2) +
//       height3 +
//       padding * 6;

//     const yHeading = padding + space * (i - 1);

//     for (let j = 0; j < column; j++) {
//       const x = padding + j * (itemWidth + padding);
//       console.log('x:', x);

//       const y1 = yHeading + (padding * 3) / 2;

//       const y2 = y1 + padding + height1;

//       const y3 = y2 + padding / 2 + height2;

//       list.push(
//         <>
//           <rect
//             x={x}
//             y={y1}
//             rx={borderRadius}
//             ry={borderRadius}
//             width={itemWidth}
//             height={height1}
//           />
//           <rect x={x} y={y2} rx={0} ry={0} width={itemWidth} height={height2} />
//           <rect
//             x={x}
//             y={y3}
//             rx={0}
//             ry={0}
//             width={itemWidth * 0.6}
//             height={height3}
//           />
//         </>
//       );

//       if (i === row) {
//         height = y3 + height3;
//       }
//     }
//   }

//   return (
//     <ContentLoader
//       viewBox={`0 0 ${width - 40} ${height}`}
//       width={width - 40}
//       height={height}
//       {...props}
//     >
//       {list}
//     </ContentLoader>
//   );
// };
// console.log('SkeletonMovie:', SkeletonMovie);

// // SkeletonMovie.metadata = {
// //   name: 'I am Doong - I come from Việt Nam',
// //   github: 'toiladoong',
// //   description: 'SkeletonMovie',
// //   filename: 'SkeletonMovie',
// // };

// export default SkeletonMovie;
