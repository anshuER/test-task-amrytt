import React from 'react';
import UsersTable from './OrderTable';

const Users = () => {
  return (
    <div className='md:col-span-2  h-[500px] bg-gray-800 rounded-lg p-4 flex flex-col gap-4'>
      <p className='text-xl font-bold text-white'>Users</p>
      <UsersTable />
    </div>
  );
};

export default Users;
