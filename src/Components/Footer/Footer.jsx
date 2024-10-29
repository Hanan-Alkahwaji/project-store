import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <section className='footer'>
        <div className="left">
            <h3>Payment Options :</h3>
        </div>
        <div className="right">
            <img src="./../../../public/assets/imgs/paypal.png" alt="" />
            <img src="./../../../public/assets/imgs/visa.png" alt="" />
            <img src="./../../../public/assets/imgs/cash.png" alt="" />
        </div>
      
    </section>
  )
}
