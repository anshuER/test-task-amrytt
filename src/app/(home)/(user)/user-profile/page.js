'use client';

import ProfileForm from '@/components/ProfileForm';
import React from 'react';

const UserProfilePage = ({ searchParams }) => {
  return (
    <div className='text-white'>
      <p className='text-2xl font-bold text-white'>Create User Profile</p>
      <ProfileForm userId={searchParams.userId || ''} />
    </div>
  );
};

export default UserProfilePage;
