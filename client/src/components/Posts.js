import React from 'react'
import { PopupDialog } from './PopupDialog';

export const Posts = (props) => {
    const hashBackground = ()=>{
        document.querySelector(".post-section").style.opacity = "0.5";
    }
    const returnState = ()=>{
      document.querySelector(".post-section").style.opacity = "1";
    }
  return (
    <div>
      <h1 className='my-5 post-section text-center'>This is post section</h1>
      
      {/* Darken background */}
      {props.activeTab!=null?hashBackground():""}
      {props.opaque === 1?returnState():""}
      {props.activeTab!==null? <PopupDialog userAction={props.activeTab} setActive={props.onTabClick} 
       opaque={props.opaque} makeOpaque={props.makeOpaque}/>:""}
    </div>
  )
}
