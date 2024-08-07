import React from 'react';
import CustomerFeedbackCard from './CustomerFeedbackCard';

const items = [
  {
    name: 'Jenny Wilson',
    star: 4,
    message:
      'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
  },
  {
    name: 'Dianne Russell',
    star: 4,
    message:
      'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service',
  },
  {
    name: 'Devon Lane',
    star: 4,
    message:
      'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service',
  },
  {
    name: 'Jenny Wilson 3',
    star: 4,
    message:
      'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
  },
  {
    name: 'Jenny Wilson 4',
    star: 4,
    message:
      'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service',
  },
];

const CustomerFeedback = () => {
  return (
    <div className='md:pl-5 bg-gray-800 h-[500px] overflow-scroll  rounded-lg p-4'>
      <p className='text-xl font-bold text-white mb-4'>Customer's Feedback</p>
      <div className='flex flex-col gap-4'>
        {items.map((item, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <CustomerFeedbackCard
              description={item.message}
              star={item.star}
              title={item.name}
            />
            <div className='border-t border-gray-600  w-full'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
