'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const UserAuthLayout = ({ children }) => {
  const router = useRouter();

  React.useEffect(() => {
    const isUserPresent = localStorage.getItem('currentUser');
    if (!isUserPresent) router.push('/auth');
  }, []);

  return <>{children}</>;
};

export default UserAuthLayout;
