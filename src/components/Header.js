import React from 'react'

const Header = () => {
  return (
    <div className='  flex justify-between text-white'>
        <h1 className='text-xl md:text-3xl p-2 md:p-4'>THE PRODUCT PLATFORM</h1>
        <div className=' flex p-4'>
            <h1 className='hidden md:block text-3xl px-4'>LEARN</h1>
            <h1 className='hidden md:block text-3xl px-4'>PRACTICE</h1>
            <img className=' h-10 md:h-10 px-1 md:px-4 ' src='https://cdn-icons-png.flaticon.com/128/236/236832.png' alt='avatar'/>
        </div>
    </div>
  )
}

export default Header