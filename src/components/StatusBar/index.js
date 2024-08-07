import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

import StatusCard from './StatusCard';

const status = [
  {
    title: 'Total Orders',
    number: '75',
    difference: '3',
    icon: <FaShoppingBag className='h-8 w-8 md:h-12 md:w-12' />,
  },
  {
    title: 'Total Deliveries',
    number: '70',
    difference: '-3',
    icon: <FaShoppingBag className='h-8 w-8 md:h-12 md:w-12' />,
  },
  {
    title: 'Total Cancelled',
    number: '05',
    difference: '3',
    icon: <FaShoppingBag className='h-8 w-8 md:h-12 md:w-12' />,
  },
  {
    title: 'Total Revenue',
    number: '$12k',
    difference: '-3',
    icon: <FaShoppingBag className='h-8 w-8 md:h-12 md:w-12' />,
  },
];

const StatusBar = () => {
  return (
    <div className='md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 h-full'>
      {status.map((item, index) => (
        <StatusCard
          difference={item.difference}
          icon={item.icon}
          number={item.number}
          title={item.title}
          key={index}
        />
      ))}
    </div>
  );
};

export default StatusBar;
