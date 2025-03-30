import { auth } from '@/auth';
import StartupForm from '@/components/StartupForm';
import React from 'react';

const page = async () => {
  const session = await auth();

  if (!session) redirect('/');
  return (
    <>
      <section className='pink_container !min-h-[230px]'>
        <h1 className='heading'>Submit Your Startup</h1>
        <p className='sub-heading'>
          Share your startup idea and let the world discover it! Fill in the
          details below to showcase your project and connect with potential
          users and collaborators.
        </p>
      </section>

      <StartupForm />
    </>
  );
};

export default page;
