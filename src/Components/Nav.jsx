import React from 'react'
import './Nav/Nav.css'

export default function Nav({logo,ul,icons}) {
  function closeCartPopup() {
    let cartContainer = document.getElementById("cartContainer");
    let overlay = document.getElementById("overlay");
    cartContainer.style.display = "none";
    overlay.style.display = "none"; 
  }
  function openCartPopup() {
    let cartContainer = document.getElementById("cartContainer");
    let overlay = document.getElementById("overlay");
    cartContainer.style.display = "block";
    overlay.style.display = "block";
  }
  function remove() {
    localStorage.setItem("cartDB", JSON.stringify([]))
    console.log(localStorage.getItem("cartDB"))
    displayCart();
    location.reload();
  
  }
  function displayCart() {
    document.querySelector("nav .cart p").innerHTML = 0;
    let total=0;
    document.getElementById("total").innerHTML = `$ ${total}.00`;
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    
  }
  function dark() {
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
       let icon=document.getElementById("moon")
       icon.src="./../../public/assets/imgs/Sun_fill.png"
        
      
    }
    else{
      let icon=document.getElementById("moon")
      icon.src="./../../public/assets/imgs/moon.png"

    }
  }
  function openNav() {
    document.getElementById('navmenu').classList.toggle('active')
    

    
  }


  return (
    <>
   
    <nav>
       <div id="overlay" onClick={closeCartPopup}></div>
      <img src={logo} alt="logo" />
      <ul>
        
          <li>{ul[0]}</li>
          <a href="#best"><li>{ul[1]}</li></a>
          <a href="#all"><li>{ul[2]}</li></a>
          <a href="#color"><li>{ul[3]}</li></a>

      </ul>
      <div className="buttons">
      <button id='bars'><img src="./../../public/assets/imgs/Menu_Alt_01.png" alt="" onClick={openNav}/></button>
      <button>   <img src={icons[0]} alt="" onClick={dark} id='moon'/></button>
      <div className="allcart">
      <button onClick={openCartPopup} ><img src={icons[1]} alt="" id='bcart'/></button>
      <div className="cart" onClick={openCartPopup} ><p>0</p></div>

      </div>
 

      </div>
    </nav>
    <div className="containernav">
      <div id="root"></div>
      <div className="sidebar" id="cartContainer" >
        <div className="head">
          <p>My Cart</p>
          <div className="foot">
            <h3>Total:</h3>
            <p id="total">$0.00</p>
            <img src="./../../public/assets/imgs/can.png"  onClick={remove}  alt="" />
          </div>
        </div>
        <div id="cartItem">Your cart is empty</div>
      </div>
    </div>
    
    <div className="navmenu" id='navmenu'>
      

    <ul>
        
       <a href="#"> <li>{ul[0]}</li></a>
        <a href="#best"><li>{ul[1]}</li></a>
        <a href="#all"><li>{ul[2]}</li></a>
        <a href="#color"><li>{ul[3]}</li></a>

    </ul>

    </div>

    
    </>
  )
}
