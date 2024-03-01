import React from 'react'
import Cards from './Cards'
import Options from './Options'
import MobileOptions from './MobileOptions'

const Feedbacks = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
        <h1 className='text-white text-3xl hidden md:block'>Back to Questions</h1>
        <div className=' flex'>
        <Cards/>
        <Options/>
        </div>
        <div className=' block md:hidden'>
        <MobileOptions/>
        </div>
        
    </div>
  )
}

export default Feedbacks