'use client';

import React from 'react';

import Header from './Header';

const DashBoardLayout = ({ children }) => {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='flex-grow p-5 mt-14 flex flex-col gap-6 bg-black'>
          <div className='flex flex-col lg:gap-8 gap-6'>{children}</div>
        </div>
        <div className='h-12 border-t flex items-center justify-center bg-gray-800 border-gray-700'>
          <p className='text-white font-bold font-serif'>Made by: Anshu</p>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
