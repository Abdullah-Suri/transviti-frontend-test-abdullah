import React from 'react';
import { UserProfile } from '@/components/UserProfile';
import { ProfileInsight } from '@/components/ProfileInsight';
import { Calendar } from '@/components/Calendar';
import { SearchJobs } from '@/components/SearchJobs';
import { JobPosts } from '@/components/job';

const Home = () => {

  return (
    <>
      <div className='container flex items-start justify-between md:flex-row flex-col py-[25px] gap-6'>
        <div className='lg:w-[25%] md:w-[30%] w-full'>
          <UserProfile />
          <ProfileInsight />
          <Calendar />
        </div>
        <div className='lg:w-[75%] md:w-[65%] w-full mt-3.5'>
          <SearchJobs />
          <JobPosts />
        </div>
      </div>
    </>
  )
}

export default Home