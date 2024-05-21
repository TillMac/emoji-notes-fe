import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <main className='flex flex-col bg-custom-background bg-cover bg-center w-screen h-screen bg-opacity-50 bg-gray-400 px-6 pb-16'>
      <section className='flex flex-col flex-nowrap items-center w-full gap-8'>
        <Image width={378} height={378} src='/images/mobile_login_model.png' alt='Mobile Login Model' className='mt-[6.25rem] mr-4' />
        <div className='flex flex-col flex-nowrap text-center gap-6 text-text'>
          <h3 className='text-5xl'>It's Time!</h3>
          <p className='text-2xl'>Hurry up, don't let your<br />thoughts slip away!</p>
        </div>
      </section>
      <Button className='w-[22.625rem] rounded-[2rem] h-[4.5rem] self-center mt-auto mb-0 bg-accent p-3 flex flex-nowrap gap-4 shadow-custom'>
        <Image width={48} height={48} src='/svg/google_icon.svg' alt='Google Logo' />
        <span className='text-2.6xl'>Sign in with Google</span>
      </Button>
    </main>
  )
}

export default page