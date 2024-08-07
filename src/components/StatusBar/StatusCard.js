import React from 'react';

const StatusCard = ({ title, number, difference, icon }) => {
  return (
    <div className='bg-gray-800 text-white md:text-sm text-[10px] font-medium  rounded-lg flex flex-col justify-between items-start p-4'>
      <div className='flex flex-col gap-1.5'>
        {icon}
        <p>{title}</p>
      </div>
      <div className='text-white lg:text-3xl text-2xl flex mt-2 md:mt-0 justify-between font-bold w-full items-end'>
        <p>{number}</p>
        <p
          className={`${difference.includes('-') ? 'text-red-500' : 'text-green-500'} text-sm`}
        >
          {difference}%
        </p>
      </div>
    </div>
  );
};

export default StatusCard;
