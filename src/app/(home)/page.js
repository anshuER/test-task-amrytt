'use client';

import React from 'react';
import Image from 'next/image';

import welcome from '../../../public/welcome.png';

export default function LandingPage() {
  return (
    <div className='flex justify-center items-center h-full py-24'>
      <Image src={welcome} />
    </div>
  );
}
