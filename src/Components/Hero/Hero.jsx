import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className='hero'>
        <div className="container">
            <div className="left">

                <h4>welcome to our store</h4>
                <h1>Smart Watch and phones</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur aspernatur ipsam alias eligendi enim tempore!</p>
                <a href="#all">
                <button>Go to buy</button>
                </a>
             
            </div>
            <div className="right">
                <img src="./../../../public/assets/imgs/hero.png" alt="" />
            </div>
        </div>


    </section>
  )
}
