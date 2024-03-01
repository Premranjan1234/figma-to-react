import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setShowMenu, setShowSuggestion, submitContact, submitFeedback, submitReport, submitSuggestion, toggleShowButton } from '../utils/configSlice'

const ShareSuggestion = () => {
    const [name,setName]=useState('')
  const [query,setQuery]=useState('')
  const dispatch=useDispatch();
  const handleSubmit=()=>{
    if (query.trim() === '') {
      alert("Please enter something in the input field.");
      return; 
    }
    dispatch(submitFeedback(false))
    dispatch(submitContact(false))
    dispatch(submitReport(false))
    dispatch(submitSuggestion(true))
    dispatch(setShowMenu(false))
    dispatch(toggleShowButton())
    dispatch(setShowSuggestion(false))
  }

  return (
    
        <div className=' bg-white text-black w-[300px] md:w-[450px] h-[400px] md:h-[476px] pl-2 md:pl-[24px] pr-2 md:pr-[16px] pt-4 md:pt-[24px] pb-4 md:pb-[16px]  '>
          <img className=' p-2' src='../Header - Issue 1 (4).png' alt='label'/>
         <img  className=' p-2' src='../Choose Label (1).png' alt='label'/>
         <input onChange={(e)=>setName(e.target.value)} className='  p-2 m-2 md:m-2 w-200px md:w-[300px] border border-black' type='text' placeholder='Enter your name'/>
         <img className=' p-2' src='../Description Label.png' alt='label'/>
         <input  onChange={(e)=>setQuery(e.target.value)} className='text-black pt-0 p-2  rounded-sm  m-2 w-[250px] md:w-[398px] h-[120px] border border-black bg-gray-400' type='text' placeholder='write here...'/>
         <img onClick={handleSubmit} className=' p-2' src='../Button1.png' alt='label'/>
         
         
    </div>

    
  )
}

export default ShareSuggestion