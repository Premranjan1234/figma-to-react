import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setShowMenu, setShowReport, submitContact, submitFeedback, submitReport, submitSuggestion, toggleShowButton } from '../utils/configSlice'

const Report = () => {
    const [name,setName]=useState('')
  const [query,setQuery]=useState('')
  const dispatch=useDispatch()
  const handleSubmit=()=>{
    if (query.trim() === '') {
      alert("Please enter something in the input field.");
      return; 
    }
    dispatch(submitFeedback(false))
    dispatch(submitContact(false))
    dispatch(submitReport(true))
    dispatch(submitSuggestion(false))
    dispatch(setShowMenu(false))
    dispatch(toggleShowButton())
    dispatch(setShowReport(false))
  }
  return (
    <div>
        <div className='-z-10 md:z-0 bg-white text-black w-[300px] md:w-[450px] h-[400px] md:h-[476px] pl-2 md:pl-[24px] pr-2 md:pr-[16px] pt-4 md:pt-[24px] pb-4 md:pb-[16px]'>
          <img className=' p-2' src='../Header - Issue 1 (2).png' alt='label'/>
         <img  className=' p-2' src='../Choose Label (1).png' alt='label'/>
         <input onChange={(e)=>setName(e.target.value)} className=' p-2 m-2 md:m-2 w-200px md:w-[300px] border border-black' type='text' placeholder='Enter your name'/>
         <img className=' p-2' src='../Description Label (1).png' alt='label'/>
         <input  onChange={(e)=>setQuery(e.target.value)} className='text-black pt-0 p-2  rounded-sm  m-2 w-[250px] md:w-[398px] h-[120px] border border-black bg-gray-400' type='text' placeholder='write here...'/>
         <img onClick={handleSubmit} className=' p-2' src='../Button1.png' alt='label'/>
         
         
    </div>
    </div>
  )
}

export default Report