import Link from 'next/link';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

const IconButtonWrapper = ({ children }) => {
  return (
    <button
      type='button'
      className='flex items-center justify-center  bg-gray-600 rounded-full h-8 w-8'
    >
      {children}
    </button>
  );
};

const IconMenu = () => {
  const path = usePathname();
  const router = useRouter();
  const [isCurrentUser, setIsCurrentUser] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      setIsCurrentUser(true);
    }
  }, []);

  return (
    <div className='flex gap-4 justify-center items-center'>
      {path === '/' ? (
        isCurrentUser ? (
          <button
            onClick={() => router.push('/dashboard')}
            className='bg-gray-800 text-white font-semibold hover:bg-gray-700 border border-gray-700 rounded-xl px-4 py-1.5 transition-all duration-300'
          >
            Goto Dashboard
          </button>
        ) : (
          <>
            <button
              onClick={() => router.push('/auth')}
              className='bg-gray-800 text-white font-semibold hover:bg-gray-700 border border-gray-700 rounded-xl px-4 py-1.5 transition-all duration-300'
            >
              Login
            </button>
            <button
              onClick={() => router.push('/auth?mode=signup')}
              className='bg-gray-800 text-white font-semibold hover:bg-gray-700 border border-gray-700 rounded-xl px-4 py-1.5 transition-all duration-300'
            >
              Sign Up
            </button>
          </>
        )
      ) : (
        <button
          onClick={() => {
            localStorage.removeItem('currentUser');
            router.push('/');
          }}
          className='bg-gray-800 text-white font-semibold hover:bg-gray-700 border border-gray-700 rounded-xl px-4 py-1.5 transition-all duration-300'
        >
          Log Out
        </button>
      )}

      {localStorage.getItem('currentUser') && (
        <IconButtonWrapper>
          <Link href='/user-profile'>
            <span className='sr-only'>Open user menu</span>
            <img
              className='lg:w-9 lg:h-9 h-8 w-8 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              alt='Rounded avatar'
            />
          </Link>
        </IconButtonWrapper>
      )}
    </div>
  );
};

export default IconMenu;
