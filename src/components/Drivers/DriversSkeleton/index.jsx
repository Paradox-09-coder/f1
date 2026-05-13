import React from 'react';
import ContentLoader from 'react-content-loader';

const DriverSkeleton = () => (
  <ContentLoader
    speed={0}
    width={420}
    height={250}
    viewBox='0 0 420 250'
    backgroundColor='#bbbbbb'
    foregroundColor='#eeeaea'
  >
    <circle cx='319' cy='53' r='45' />
    <rect x='242' y='108' rx='72' ry='72' width='156' height='244' />
    <rect x='10' y='50' rx='7' ry='7' width='100' height='15' />
    <rect x='10' y='20' rx='7' ry='7' width='100' height='22' />
    <rect x='10' y='85' rx='2' ry='2' width='50' height='10' />
    <rect x='10' y='109' rx='14' ry='14' width='50' height='50' />
    <rect x='-1' y='234' rx='0' ry='0' width='396' height='17' />
    <rect x='0' y='-1' rx='0' ry='0' width='4' height='247' />
    <rect x='1' y='0' rx='0' ry='0' width='424' height='3' />
    <rect x='416' y='1' rx='0' ry='0' width='15' height='254' />
    <rect x='395' y='236' rx='0' ry='0' width='53' height='20' />
    <rect x='2' y='3' rx='0' ry='0' width='4' height='3' />
    <rect x='4' y='2' rx='0' ry='0' width='3' height='3' />
    <rect x='2' y='6' rx='0' ry='0' width='3' height='1' />
    <rect x='6' y='3' rx='0' ry='0' width='2' height='1' />
    <rect x='413' y='2' rx='0' ry='0' width='1' height='1' />
    <rect x='414' y='2' rx='0' ry='0' width='3' height='3' />
    <rect x='413' y='2' rx='0' ry='0' width='1' height='2' />
    <rect x='415' y='5' rx='0' ry='0' width='2' height='1' />
  </ContentLoader>
);

export default DriverSkeleton;
