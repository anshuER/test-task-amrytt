import React from 'react';
import StarRatings from '../StarRatings';

const CustomerFeedbackCard = ({ title, star, description }) => {
  return (
    <div className='flex flex-col justify-start text-white gap-2'>
      <div className='flex gap-4 items-center'>
        <img
          className='lg:w-8 lg:h-8 h-7 w-7 rounded-full'
          src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
          alt='Rounded avatar'
        />
        <p className='lg:text-base text-sm font-semibold'>{title}</p>
      </div>
      <StarRatings rating={star} />
      <p className='lg:text-xs text-[10px] text-gray-400'>{description}</p>
    </div>
  );
};

export default CustomerFeedbackCard;
