import React from 'react'
import P6 from '../assets/6.png'
import P7 from '../assets/7.png'
import P7a from '../assets/7a.png'
import P7pro from '../assets/7pro.png'


function FiltersD() {
  return (
    <div>
        <div>
            <h3>Choose Devices</h3>
                
                    <div className='carrierBox'>
                        <button className=' btn btn-light btn-outline-dark btn-sm'>
                            <div>
                                <img src={P6} className='carrierImage' alt="Verizon" />
                                <h4>Pixel 6</h4>
                            </div>
                        </button>
                        <button className=' btn btn-light btn-outline-dark btn-sm'>
                            <div>
                                <img src={P7} className='carrierImage' alt="TMobile" />
                                <h4>Pixel 7</h4>
                            </div>
                        </button>
                    </div>
                    <div className='carrierBox'>
                        <button className=' btn btn-light btn-outline-dark btn-sm'>
                            <div>
                                <img src={P7a} className='carrierImage' alt="ATT" />
                                <h4>Pixel 7a</h4>
                            </div>
                        </button>
                        <button className=' btn btn-light btn-outline-dark btn-sm'>
                            <div>
                                <img src={P7pro} className='carrierImage' alt="BestBuy" />
                                <h4>Pixel 7pro</h4>
                            </div>
                        </button>
                    </div>
                
        </div>  
           
    </div>
  )
}

export default FiltersD