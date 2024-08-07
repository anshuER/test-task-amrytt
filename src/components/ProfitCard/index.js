import React from 'react';
import { Gauge } from '@mui/x-charts/Gauge';

const settings = {
  width: 100,
  height: 100,
  value: 70,
};

const ProfitCard = () => {
  return (
    <div className='h-full bg-gray-800 rounded-lg p-3 flex justify-between lg:justify-around items-center'>
      <div className='flex flex-col text-white h-full justify-between'>
        <p className='text-sm'>Net Profit</p>
        <p className='lg:text-5xl text-2xl font-bold'>$ 6759.25</p>
        <p className='text-green-500 text-sm'>3%</p>
      </div>
      <div>
        <Gauge
          {...settings}
          cornerRadius='50%'
          className='text-white'
          sx={() => ({
            [`& .MuiGauge-valueText`]: {
              fontSize: 30,
              color: 'white',
              fontWeight: 600,
            },
          })}
        />
      </div>
    </div>
  );
};

export default ProfitCard;
