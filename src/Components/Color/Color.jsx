import React from 'react'
import './Color.css'

export default function Color() {
    function change() {
        let color =document.querySelector('.color .container .right input ').value
        let colorw=document.getElementById('colorw')
        colorw.style.backgroundColor=color
        
        
    }

  return (
    <section className='color' id='color'>
        <div className="info">
        <h1>Product color</h1>
        <p>Try and enjoy</p>

        </div>
      
       <div className="container">
        <div className="left">
          
            <div className="colorw" id='colorw'>
            <img src="./../../../public/assets/imgs/watch color2.png" alt="" />

            </div>

        </div>
        <div className="right">
            <h1>Choose the color of the watch</h1>
            <p>Enjoy seeing the different colors of the watch before purchasing it.</p>
            <input type="color" onInput={change} />
        </div>
       </div>
    </section>
  )
}
