import React from 'react'
import Highlight from '../components/common/Highlight'
import Table from '../components/common/Table'
import ContentWrapper from '../components/layouts/ContentWrapper'
import DefaultLayout from '../components/layouts/DefaultLayout'
import Contents from '../contents/content'

const home = () => {
  return (
    <DefaultLayout className={'min-h-[calc(100vh-90px)] bg-slate-400 flex items-center justify-center'}>
      {/* Text */}
      <div className='w-full h-auto flex justify-center text-white text-[7rem]'>
        Portfolio
      </div>

    </DefaultLayout>
  )
}

export default home