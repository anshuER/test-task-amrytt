'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthPage = ({ searchParams }) => {
  const router = useRouter();
  const mode = searchParams.mode;
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setIsLogin(mode !== 'signup');
  }, [mode]);

  const validationSchema = Yup.object({
    name: !isLogin ? Yup.string().required('Full Name is required') : null,
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values) => {
    const admins = JSON.parse(window.localStorage.getItem('admins') || '[]');

    if (isLogin) {
      const isUserPresent = admins.some(
        (admin) =>
          admin.email === values.email && admin.password === values.password
      );

      if (isUserPresent) {
        router.push('/dashboard');
        localStorage.setItem('currentUser', JSON.stringify(values.email));
      } else {
        alert('Invalid credentials');
      }
    } else {
      const isUserPresent = admins.some(
        (admin) => admin.email === values.email
      );
      if (isUserPresent) {
        alert('User Already Exits try with different email');
      } else {
        admins.push(values);
        localStorage.setItem('admins', JSON.stringify(admins));
        router.push('/auth?mode=login');
      }
    }
  };

  return (
    <div className='h-full my-20 flex items-center justify-center text-white'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-white'>
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </h2>
        </div>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='flex flex-col gap-4 mt-8 space-y-6'>
            {!isLogin && (
              <div>
                <label htmlFor='name' className='sr-only'>
                  Full Name
                </label>
                <Field
                  id='name'
                  name='name'
                  type='text'
                  autoComplete='name'
                  className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Full Name'
                />
                <ErrorMessage
                  name='name'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>
            )}
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <Field
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                className='rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
              <ErrorMessage
                name='email'
                component='div'
                className='text-red-500 text-sm'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <Field
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                className='relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
              <ErrorMessage
                name='password'
                component='div'
                className='text-red-500 text-sm'
              />
            </div>
            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </Form>
        </Formik>
        <div className='text-sm text-center'>
          {isLogin ? (
            <span>
              Don't have an account?{' '}
              <Link href='/auth?mode=signup'>
                <p className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Sign Up
                </p>
              </Link>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <Link href='/auth?mode=login'>
                <p className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Sign In
                </p>
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
