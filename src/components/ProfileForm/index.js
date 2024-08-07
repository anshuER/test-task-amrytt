'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';

import { storage } from '@/lib/firebase';

const INITIAL_FORM_VALUES = {
  firstName: '',
  lastName: '',
  profileImage: null,
  age: '',
  gender: '',
  hobbies: '',
  country: 'India',
  state: '',
  city: '',
};

const ProfileForm = ({ userId }) => {
  const router = useRouter();
  const [initialValues, setInitialValues] = useState(INITIAL_FORM_VALUES);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    profileImage: Yup.mixed().required('Required'),
    age: Yup.number()
      .required('Required')
      .min(1, 'Invalid age')
      .max(120, 'Invalid age'),
    gender: Yup.string()
      .oneOf(['male', 'female', 'other'], 'Invalid Gender')
      .required('Required'),
    hobbies: Yup.string().required('Required'),
    country: Yup.mixed().required('Required'),
    state: Yup.mixed().required('Required'),
    city: Yup.mixed().required('Required'),
  });

  const handleFileUpload = (file, setFieldValue) => {
    if (!file) return;

    const storageRef = ref(storage, `profileImages/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFieldValue('profileImage', downloadURL);
        });
      }
    );
  };

  React.useEffect(() => {
    if (userId) {
      const users = JSON.parse(localStorage.getItem('users'));

      const user = users?.find((user) => user.id == userId);

      if (user) {
        setInitialValues(user);
        setSelectedCity(user.city);
        setSelectedCountry(user.country);
        setSelectedState(user.state);
      }
    }
  }, [userId]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(values) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (userId) {
          const userIndex = users.findIndex((user) => user.id == userId);
          if (userIndex !== -1) {
            users[userIndex] = { ...values, id: userId };
          }
        } else {
          users.push({ ...values, id: Date.now() });
        }
        localStorage.setItem('users', JSON.stringify(users));
        router.push('/dashboard');
      }}
    >
      {({ setFieldValue }) => (
        <Form className='p-8 space-y-6 shadow-lg rounded-lg'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='firstName' className='block text-sm font-medium'>
                First Name
              </label>
              <Field
                name='firstName'
                type='text'
                className='mt-1 block w-full rounded-md text-gray-800 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
              />
              <ErrorMessage
                name='firstName'
                component='div'
                className='text-red-600 text-sm mt-1'
              />
            </div>
            <div>
              <label htmlFor='lastName' className='block text-sm font-medium'>
                Last Name
              </label>
              <Field
                name='lastName'
                type='text'
                className='mt-1 block w-full text-gray-800 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
              />
              <ErrorMessage
                name='lastName'
                component='div'
                className='text-red-600 text-sm mt-1'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='age' className='block text-sm font-medium'>
                Age
              </label>
              <Field
                name='age'
                type='number'
                className='mt-1 block w-full text-gray-800 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
              />
              <ErrorMessage
                name='age'
                component='div'
                className='text-red-600 text-sm mt-1'
              />
            </div>
            <div>
              <label htmlFor='gender' className='block text-sm font-medium'>
                Gender
              </label>
              <Field
                as='select'
                name='gender'
                className='mt-1 block w-full text-gray-800 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
              >
                <option value='' label='Select gender' />
                <option value='male' label='Male' />
                <option value='female' label='Female' />
                <option value='other' label='Other' />
              </Field>
              <ErrorMessage
                name='gender'
                component='div'
                className='text-red-600 text-sm mt-1'
              />
            </div>
          </div>

          <div>
            <label htmlFor='hobbies' className='block text-sm font-medium'>
              Hobbies
            </label>
            <Field
              name='hobbies'
              type='text'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-800 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
            />
            <ErrorMessage
              name='hobbies'
              component='div'
              className='text-red-600 text-sm mt-1'
            />
          </div>

          <div>
            <label
              htmlFor='country'
              className='block text-sm font-medium text-white'
            >
              Country
            </label>
            <Select
              styles={{
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: '#1F2937',
                  color: 'white',
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isFocused ? 'black' : 'white',
                  '&:hover': {
                    backgroundColor: '#D1D5DB',
                  },
                }),
              }}
              className='!bg-gray-800 !text-white'
              options={Country.getAllCountries()}
              getOptionLabel={(options) => options['name']}
              getOptionValue={(options) => options['name']}
              value={selectedCountry}
              onChange={(item) => {
                setSelectedCountry(item);
                setFieldValue('country', item);
              }}
            />
            <ErrorMessage
              name='country'
              component='div'
              className='text-red-600 text-sm mt-1'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='state'
                className='block text-sm font-medium text-white'
              >
                State
              </label>
              <Select
                options={State.getStatesOfCountry(selectedCountry?.isoCode)}
                getOptionLabel={(options) => options['name']}
                getOptionValue={(options) => options['name']}
                value={selectedState}
                onChange={(item) => {
                  setSelectedState(item);
                  setFieldValue('state', item);
                }}
                styles={{
                  menu: (provided) => ({
                    ...provided,
                    backgroundColor: '#1F2937',
                    color: 'white',
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    color: state.isFocused ? 'black' : 'white',
                    '&:hover': {
                      backgroundColor: '#D1D5DB',
                    },
                  }),
                }}
              />
              <ErrorMessage
                name='state'
                component='div'
                className='text-red-600 text-sm mt-1'
              />
            </div>
            <div>
              <label
                htmlFor='city'
                className='block text-sm font-medium text-white'
              >
                City
              </label>
              <Select
                options={City.getCitiesOfState(
                  selectedState?.countryCode,
                  selectedState?.isoCode
                )}
                getOptionLabel={(options) => options['name']}
                getOptionValue={(options) => options['name']}
                value={selectedCity}
                onChange={(item) => {
                  setSelectedCity(item);
                  setFieldValue('city', item);
                }}
                styles={{
                  menu: (provided) => ({
                    ...provided,
                    backgroundColor: '#1F2937',
                    color: 'white',
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    color: state.isFocused ? 'black' : 'white',
                    '&:hover': {
                      backgroundColor: '#D1D5DB',
                    },
                  }),
                }}
              />
              <ErrorMessage
                name='city'
                component='div'
                className='text-red-600 text-sm mt-1'
              />
            </div>
          </div>

          {!userId && (
            <div>
              <label
                htmlFor='profileImage'
                className='block text-sm font-medium'
              >
                Profile Image
              </label>
              <input
                id='profileImage'
                name='profileImage'
                type='file'
                className='mt-1 block w-full'
                onChange={(event) => {
                  handleFileUpload(event.currentTarget.files[0], setFieldValue);
                }}
              />
              {uploadProgress == 0 && (
                <ErrorMessage
                  name='profileImage'
                  component='div'
                  className='text-red-600 text-sm mt-1'
                />
              )}
              {uploadProgress > 0 && (
                <div className='mt-2'>
                  <span>Upload Progress: {uploadProgress}%</span>
                </div>
              )}
            </div>
          )}

          <div className='flex justify-end'>
            <button
              type='submit'
              className='py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
