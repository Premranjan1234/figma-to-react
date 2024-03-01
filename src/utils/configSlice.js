import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        
      
        showButton:true,
        showFeedback:false,
        showSuggestion:false,
        showReport:false,
        showContact:false,
        showMenu:false,
        feedbackSubmit:false,
        suggestionSubmit:false,
        contactSubmit:false,
        reportSubmit:false,

        
    },
    reducers:{
       toogleSuggestion:(state,action)=>{
         state.submitSuggestion=!state.submitSuggestion;
       },
       toogleFeedback:(state,action)=>{
        state.submitFeedback=!state.submitFeedback;
      },
      toogleContact:(state,action)=>{
        state.submitContact=!state.submitContact;
      },
      toogleReport:(state,action)=>{
        state.submitReport=!state.submitReport;
      },
      toggleShowButton:(state,action)=>{
        state.showButton=!state.showButton
      },
      toggleShowSuggestion:(state,action)=>{
        state.showSuggestion=!state.showSuggestion
      },
      toggleShowFeedback:(state,action)=>{
        state.showFeedback=!state.showFeedback
      },
      toggleShowContact:(state,action)=>{
        state.showContact=!state.showContact
      },
      toggleShowReport:(state,action)=>{
        state.showReport=!state.showReport
      },
      toggleShowMenu:(state,action)=>{
        state.showMenu=!state.showMenu
      },
      setShowSuggestion:(state,action)=>{
        state.showSuggestion=action.payload
      },
      setShowFeedback:(state,action)=>{
        state.showFeedback=action.payload
      },
      setShowReport:(state,action)=>{
        state.showReport=action.payload
      },
      setShowContact:(state,action)=>{
        state.showContact=action.payload
      },
      setShowMenu:(state,action)=>{
        state.showMenu=action.payload
      },
      submitSuggestion:(state,action)=>{
        state.suggestionSubmit=action.payload
      },
      submitFeedback:(state,action)=>{
        state.feedbackSubmit=action.payload
      },
      submitReport:(state,action)=>{
        state.reportSubmit=action.payload
      },
      submitContact:(state,action)=>{
        state.contactSubmit=action.payload
      },


      

    }
});
export const {toogleSuggestion,toogleFeedback,
  toogleContact,toogleReport,
  toggleShowButton,toggleShowContact,
  toggleShowFeedback,toggleShowReport,
  toggleShowSuggestion,toggleShowMenu,
  setShowContact,setShowFeedback,
  setShowSuggestion,setShowReport,
  setShowMenu,submitContact,submitFeedback,submitReport,submitSuggestion
}=configSlice.actions;
export default configSlice.reducer;

