import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setShowContact, setShowFeedback, setShowMenu, setShowReport, setShowSuggestion, toggleShowButton, toggleShowContact, toggleShowFeedback, toggleShowMenu, toggleShowReport, toggleShowSuggestion } from '../utils/configSlice';

const Option = () => {
   const dispatch=useDispatch();
  
  const handleClickFeedback=()=>{
      
    dispatch(setShowContact(false));
  dispatch(setShowReport(false));
  dispatch(setShowSuggestion(false));
  dispatch(setShowFeedback(true));
       
      
  }
  const handleClickReport=()=>{
    
    dispatch(setShowReport(true));
    dispatch(setShowSuggestion(false));
    dispatch(setShowContact(false));
    dispatch(setShowFeedback(false));
    
       
    
}
const handleClickContact=()=>{
  
  dispatch(setShowContact(true));
  dispatch(setShowReport(false));
    dispatch(setShowSuggestion(false));
    dispatch(setShowFeedback(false));
       
  
}
const handleClickSuggestion=()=>{
  dispatch(setShowContact(false));
  dispatch(setShowReport(false));
  dispatch(setShowSuggestion(true));
  dispatch(setShowFeedback(false));


       
       
  }
  const popUpControl=()=>{
       dispatch(setShowMenu(false));
       dispatch(toggleShowButton());
       dispatch(setShowContact(false));
       dispatch(setShowReport(false));
       dispatch(setShowSuggestion(false));
       dispatch(setShowFeedback(false));

  }
  
  return (
    <div className=' flex'>
        <img onClick={handleClickContact} className='hover:cursor-pointer w-10 h-10' src='../Fab - D (2).png' alt='icon1'/>
        <img onClick={handleClickSuggestion} className='hover:cursor-pointer w-10 h-10' src='../Fab - D (1).png' alt='icon2'/>
        <img onClick={handleClickFeedback} className='hover:cursor-pointer w-10 h-10' src='../Fab - D.png' alt='icon3'/>
        <img onClick={handleClickReport} className='hover:cursor-pointer w-10 h-10 p-3 rounded-full bg-white'  src='../Group.png' alt='icon4'/>
         <img onClick={popUpControl} className='hover:cursor-pointer w-10 h-10  pb-2 pl-2 ' src="../cross.png" alt='button'/>
    </div>
  )
}

export default Option