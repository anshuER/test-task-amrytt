import React, { Suspense } from 'react';
import Link from 'next/link';

import IconMenu from './IconMenu';

const Header = () => {
  return (
    <nav className='fixed top-0 z-50 h-16 w-full  border-b bg-gray-800 border-gray-700'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start rtl:justify-end'>
            <Link href='/' className='flex ms-2 md:me-4'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='h-8 me-3'
                alt='FlowBite Logo'
              />
            </Link>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center ms-3'>
              <Suspense fallback={<>Loading..</>}>
                <IconMenu />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
