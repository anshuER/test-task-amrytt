import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const headers = ['Name', 'Age', 'Gender', 'Hobbies', 'Address'];

const UsersTable = () => {
  const router = useRouter();
  const [users, setUsers] = React.useState([]);

  const handleDeleteUser = (id) => {
    const updatedUser = users.filter((user) => user.id !== id);
    setUsers(updatedUser);
    localStorage.setItem('users', JSON.stringify(updatedUser));
  };

  React.useEffect(() => {
    const users = localStorage.getItem('users');
    if (users) {
      setUsers(JSON.parse(users));
    }
  }, []);

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-[10px] h-full lg:text-sm text-left rtl:text-right text-gray-400'>
        <thead className=' text-white font-bold'>
          <tr>
            <th scope='col' className='px-6 py-3'></th>
            {headers.map((name) => (
              <th scope='col' key={name} className='px-6 py-3'>
                {name}
              </th>
            ))}
            <th scope='col' className='px-6 py-3'></th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((data, index) => (
              <tr
                className='border-b bg-gray-800 font-light text-white border-gray-700'
                key={index}
              >
                <th align='center'>
                  <Image
                    className='h-8 w-8 rounded-full'
                    alt='Profile'
                    width={100}
                    height={100}
                    src={data.profileImage}
                  />
                </th>
                <th
                  scope='row'
                  className='px-6 py-4  font-bold whitespace-nowrap text-white'
                >
                  {data.firstName} {data.lastName}
                </th>
                <td className='px-6 py-4'>{data.age}</td>
                <td className='px-6 py-4'>{data.gender}</td>
                <td className='px-6 py-4'>{data.hobbies}</td>
                <td className='px-6 py-4'>
                  {`${data.city.name}, ${data.state.name}, ${data.country.name}`}
                </td>
                <td className='px-6 py-4 flex gap-2 font-bold  text-blue-800'>
                  <button
                    onClick={() =>
                      router.push(`/user-profile?userId=${data.id}`)
                    }
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteUser(data.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='7' className='px-6 py-4 text-center'>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const statusStyles = {
  Delivered: 'bg-green-500 text-green-800',
  Cancelled: 'bg-red-500 text-red-800',
  Pending: 'bg-red-500 text-red-800',
};

const Chip = ({ status }) => {
  return (
    <span
      className={`px-2 py-1 rounded-full text-[10px] lg:text-sm font-bold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default UsersTable;
