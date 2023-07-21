import React from 'react';
import ContentLoader from 'react-content-loader';

export const SkeletonReviews = props => (
  <ContentLoader viewBox="0 0 476 124" {...props}>
    <rect x="38" y="13" width="48" height="6" rx="3" />
    <rect x="38" y="22" width="52" height="6" rx="3" />
    <rect x="10" y="36" width="410" height="6" rx="3" />
    <rect x="10" y="46" width="410" height="6" rx="3" />
    <rect x="10" y="56" width="410" height="6" rx="3" />
    <rect x="10" y="66" width="340" height="6" rx="3" />
    <rect x="10" y="76" width="340" height="6" rx="3" />
    <rect x="10" y="86" width="178" height="6" rx="3" />
    <circle cx="20" cy="20" r="12" />
  </ContentLoader>
);
