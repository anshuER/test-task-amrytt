'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const AuthLayout = ({ children }) => {
  const router = useRouter();

  React.useEffect(() => {
    const isUserPresent = localStorage.getItem('currentUser');
    if (isUserPresent) router.push('/dashboard');
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
