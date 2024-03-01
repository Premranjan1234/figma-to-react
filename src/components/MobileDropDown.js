import React from 'react'

const MobileDropDown = () => {
  return (
    <div>
        <select class="block md:hidden appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option className=' w-1'>Popular</option>
        <option>Practice Questions</option>
        <option>Interview Questions</option>
       </select>
       <select class="block md:hidden appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option className=' w-1'>Complexity</option>
        <option>Practice Questions</option>
        <option>Interview Questions</option>
       </select>
       <select class="block md:hidden appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option className=' w-[283px] h-[40px]'>Industry</option>
        <option>Practice Questions</option>
        <option>Interview Questions</option>
       </select>
       <select class="block md:hidden  appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option className=' w-1'>Indutry Type</option>
        <option>Practice Questions</option>
        <option>Interview Questions</option>
       </select>
       <select class="block md:hidden mb-4 appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option className=' w-1'>Company Type</option>
        <option>Practice Questions</option>
        <option>Interview Questions</option>
       </select>
    </div>
  )
}

export default MobileDropDown