import React from 'react';

const items = [
  { icon: '⚙️', text: 'Goals', color: 'bg-red-500' },
  { icon: '🍔', text: 'Popular Dishes', color: 'bg-blue-500' },
  { icon: '🍽️', text: 'Menus', color: 'bg-teal-500' },
];
const Targets = () => {
  return (
    <div className='h-full bg-gray-800 rounded-lg  flex flex-col p-3 justify-between'>
      {items.map((item, index) => (
        <div key={index} className='flex items-center justify-between p-2'>
          <div className='flex items-center'>
            <div
              className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full ${item.color}`}
            >
              <span className='text-white text-xl'>{item.icon}</span>
            </div>
            <span className='ml-4 text-white text-base lg:text-lg'>
              {item.text}
            </span>
          </div>
          <div>
            <span className='text-gray-400 text-xl'>{'>'}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Targets;
