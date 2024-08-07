import React from 'react';

import { BarChart } from '@mui/x-charts/BarChart';

function BasicBars() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      height={200}
    />
  );
}
const Activity = () => {
  return (
    <div className='md:col-span-2 h-full bg-gray-800 rounded-lg p-4'>
      <p className='text-xl font-bold text-white'>Activity</p>
      <BasicBars />
    </div>
  );
};

export default Activity;
