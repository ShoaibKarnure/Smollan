import React from 'react'
import Navbar from './Nav'
import FiltersC from './FiltersCarriers'
import FiltersD from './FiltersDevices'
import "./styles.css"

function Dash() {
  return (
    <div>
        <Navbar/>    
        <div>
            <FiltersC/>
            <FiltersD/>
        </div>
    </div>
  )
}

export default Dash