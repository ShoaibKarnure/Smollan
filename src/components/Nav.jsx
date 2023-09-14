import React from 'react'
import GoogleLogo from '../assets/GoogleLogo.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={GoogleLogo} alt="GoogleLogo" />
        
        <h2>Pixel Sales Dashboard</h2>
        
    </div>
  )
}

export default Navbar