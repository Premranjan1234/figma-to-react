import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleShowButton, toggleShowContact, toggleShowFeedback, toggleShowMenu, toggleShowReport, toggleShowSuggestion } from '../utils/configSlice';

const MobileOtherOptions = () => {
  const dispatch=useDispatch();
    const handleClick=()=>{
      dispatch(toggleShowButton());
      dispatch(toggleShowMenu());
  }
  const handleClickFeedback=()=>{
      dispatch(toggleShowFeedback());
      dispatch(toggleShowMenu());

  }
  const handleClickReport=()=>{
     dispatch(toggleShowReport());
     dispatch(toggleShowMenu());
}
const handleClickContact=()=>{
 dispatch(toggleShowContact());
 dispatch(toggleShowMenu());
}
const handleClickSuggestion=()=>{
  dispatch(toggleShowSuggestion());
  dispatch(toggleShowMenu());
}

  return (
    
    <div  className=' flex flex-col w-40 h-30 mb-10 '>
        <img className=' hover:cursor-pointer' onClick={handleClickFeedback} src='../Navigation 1.png' alt='list1'/>
        <img className='hover:cursor-pointer' onClick={handleClickReport} src='../Navigation 2.png' alt='list2'/>
        <img className='hover:cursor-pointer' onClick={handleClickSuggestion} src='../Navigation 3.png' alt='list3'/>
        <img className='hover:cursor-pointer'onClick={handleClickContact} src='../Navigation 4.png' alt='list4'/>
        <img onClick={handleClick} className=' hover:cursor-pointer h-10 w-10' src='../cross.png' alt='list5'/>
        
    
    </div>
  )
}

export default MobileOtherOptions