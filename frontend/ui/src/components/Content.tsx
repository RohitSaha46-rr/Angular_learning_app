import React from 'react'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import '../styles/content.css'
const Content = () => {
  return (
    <div className='Content'>
        <LeftBar></LeftBar>
        <RightBar></RightBar>
    </div>
  )
}

export default Content
