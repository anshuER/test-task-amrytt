'use client';

import React, { Suspense } from 'react';

import Activity from '@/components/Activity';
import CustomerFeedback from '@/components/CustomerFeedback';
import ProfitCard from '@/components/ProfitCard';
import Users from '@/components/RecentOrder';
import StatusBar from '@/components/StatusBar';
import Targets from '@/components/Targets';

export default function DashboardPage() {
  return (
    <Suspense fallback={<>Loading</>}>
      <p className='text-2xl font-bold text-white'>Dashboard</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 h-auto lg:h-40'>
        <StatusBar />
        <ProfitCard />
      </div>

      <div className='grid md:grid-cols-3 gap-4 h-auto'>
        <Activity />
        <Targets />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Users />
        <CustomerFeedback />
      </div>
    </Suspense>
  );
}
