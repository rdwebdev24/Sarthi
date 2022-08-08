import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
      <p style={{marginBottom:"0"}}>This site has been visited <span  id="visits"></span> times.</p>
    </div>
  )
}

export default Footer
