import React, { useState } from 'react'
import OtherOptions from './OtherOptions';
import ShareFeedback from './ShareFeedback';
import Option from './Option';
import Contact from './Contact';
import Report from './Report';
import ShareSuggestion from './ShareSuggestion';
import { useDispatch, useSelector } from 'react-redux';
import { submitContact, submitFeedback, submitReport, submitSuggestion, toggleShowButton, toggleShowMenu } from '../utils/configSlice';

const Options = () => {
    
  const dispatch=useDispatch();
  const showButton=useSelector(store=>store.config.showButton);
  const showSuggestion=useSelector(store=>store.config.showSuggestion);
  const showFeedback=useSelector(store=>store.config.showFeedback);
  const showContact=useSelector(store=>store.config.showContact);
  const showReport=useSelector(store=>store.config.showReport);
  const menu=useSelector(store=>store.config.showMenu);
  const showMessageOne=useSelector(store=>store.config.suggestionSubmit);
  const showMessageTwo=useSelector(store=>store.config.feedbackSubmit);
  const showMessageThree=useSelector(store=>store.config.contactSubmit);
  const showMessageFour=useSelector(store=>store.config.reportSubmit);
  const popUpConrtol=()=>{
      dispatch(toggleShowButton())
      dispatch(toggleShowMenu())
      dispatch(submitFeedback(false))
     dispatch(submitContact(false))
     dispatch(submitReport(false))
     dispatch(submitSuggestion(false))

  }

    
 
  
  return (
    <div className='p-2 hidden md:block'>
        {menu &&
          <OtherOptions/>
        }

         {showMessageFour&& <img  className='hover:cursor-pointer w-60 h-20   fixed  bottom-8 right-1 p-6 hidden md:block  ' src="../Hover message (4).png" alt='button'/>}
        {showMessageThree&& <img className='hover:cursor-pointer w-60 h-20   fixed bottom-8 right-1 p-6 hidden md:block ' src="../Hover message (2).png" alt='button'/>}
        {showMessageTwo&& <img  className='hover:cursor-pointer w-60 h-20   fixed bottom-8 right-1 p-6 hidden md:block' src="../Hover message (3).png" alt='button'/>}
        {showMessageOne&& <img  className='hover:cursor-pointer w-60 h-20  fixed bottom-8 right-1 p-6 hidden md:block ' src="../Hover message (1).png" alt='button'/>}
        {showButton&& <img onClick={()=>popUpConrtol()} className='hover:cursor-pointer w-20 h-20   fixed bottom-0 right-0 p-4 hidden md:block' src="../button.png" alt='button'/>}
        {showFeedback&& 
        <>
        <ShareFeedback/>
        <Option/>
        </>}
        {
          showContact&&
          <>
          <Contact/>
          <Option/>
          </>
        }
        {
          showReport&&
          <>
          <Report/>
          <Option/>
          </>
        }
        {
          showSuggestion&&
          <>
          <ShareSuggestion/>
          <Option/>
          </>

        }
        
        
    </div>
  )
}

export default Options