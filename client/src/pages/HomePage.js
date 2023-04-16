import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Posts } from '../components/Posts'

export const HomePage = () => {
    const [buttonClicked,setActiveContainer] = useState(null);
    const [originalOpacity,setOpacity] = useState();
    const handleContainerView = (tab)=>{
        setActiveContainer(tab);
    }
    const handleOpacity = (num)=>{
      setOpacity(num);
    }
  return (
    <div className='main-container'>
        <Navbar activeTab={buttonClicked} opaque={originalOpacity} makeOpaque={handleOpacity} onTabClick={handleContainerView}/>
        {/* Array.map with backend json array */}
        <Posts activeTab={buttonClicked} opaque={originalOpacity} makeOpaque={handleOpacity} onTabClick={handleContainerView}/>
    </div>
  )
}
