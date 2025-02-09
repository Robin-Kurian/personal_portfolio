import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'

const home = () => {
  return (
    <DefaultLayout className={'min-h-[calc(100vh-90px)] bg-slate-400 flex items-center justify-center'}>
      {/* Text */}
      <div className='w-full h-auto flex justify-center text-white text-[7rem]'>
        Starter
      </div>

    </DefaultLayout>
  )
}

export default home