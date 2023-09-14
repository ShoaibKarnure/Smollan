import React from 'react'
import Verizon from '../assets/Verizon_Logo.png'
import TMobile from '../assets/Tmobile_Logo.png'
import ATT from '../assets/AT&T_Logo.png'
import BestBuy from '../assets/BestBuy_Logo.png'

function FiltersC() {
  return (
    <div>
        <div>
            <h3>Choose Carriers</h3>
                
                    <div className='carrierBox'>
                        <button className='carrierButton btn btn-light btn-outline-dark btn-sm'>
                            <div>
                                <img src={Verizon} className='carrierImage' alt="Verizon" />
                                <h4>Verizon</h4>
                            </div>
                        </button>
                        <button className='carrierButton btn btn-light btn-outline-dark btn-sm'>
                            <div>
                                <img src={TMobile} className='carrierImage' alt="TMobile" />
                                <h4>TMobile</h4>
                            </div>
                        </button>
                    </div>
                    <div className='carrierBox'>
                        <button className='carrierButton btn btn-light btn-outline-dark btn-sm'>
                            <div>
                                <img src={ATT} className='carrierImage' alt="ATT" />
                                <h4>ATT</h4>
                            </div>
                        </button>
                        <button className='carrierButton btn btn-light btn-outline-dark btn-sm'>
                            <div>
                                <img src={BestBuy} className='carrierImage' alt="BestBuy" />
                                <h4>BestBuy</h4>
                            </div>
                        </button>
                    </div>
                
        </div>  
           
    </div>
  )
}

export default FiltersC