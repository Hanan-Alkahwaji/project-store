
import './All.css'
import  { useEffect } from 'react';
import { useState } from 'react';


export default function All({watch,phone,remove}) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const allProducts = [...watch, ...phone];
        setProducts(allProducts);
        localStorage.setItem("products", JSON.stringify(allProducts));
        
        const storedCart = JSON.parse(localStorage.getItem("cartDB")) || [];
        setCart(storedCart);
        displayCart(storedCart);
    }, [watch, phone]);

    function addToCart(id) {
        const newCart = [...cart, products[id]];
        setCart(newCart);
        localStorage.setItem("cartDB", JSON.stringify(newCart));
        displayCart(newCart);
    }

    
    function displayCart(cartItems) {
        document.querySelector("nav .cart p").innerHTML = cartItems.length;
        let total=0;
        cartItems.map((element)=>{return  parseFloat(total = total + parseFloat(element.price))})
        document.getElementById("total").innerHTML = `$ ${total}.00`;
        if (cartItems.length == 0) {
            document.getElementById("cartItem").innerHTML = "Your cart is empty";
        } else {
            document.getElementById("cartItem").innerHTML = cartItems.map((element,index) => {
                return   `
                 <div className="product">
                    <img src=${element.img} alt="" />
                    <h2>${element.h2} </h2>
                   <h4>price:<span>${element.price}$</span></h4>
                       
                  
                </div>
                `
            }
                
            ).join('');
        }
    }
  
    function active(number) {
        
        
        const lihchh =document.querySelectorAll('.all .info ul li h3');
        const cardp =document.querySelectorAll('.cardp');
        const cardw=document.querySelectorAll('.cardw');
        lihchh[0].style.color=' var(--black)'
        lihchh[1].style.color=' var(--black)'
         lihchh[2].style.color=' var(--black)'
        if (number==1) {
            lihchh[0].style.color='orange'
            for (let i = 0; i < cardp.length; i++) {
                cardp[i].style.display=' none'

                
            }
            for (let i = 0; i < cardw.length; i++) {
                cardw[i].style.display='block'

            }

            
        }
        if (number==2) {
            lihchh[1].style.color='orange'
            for (let i = 0; i < cardw.length; i++) {
                cardw[i].style.display=' none'
            }
            for (let i = 0; i < cardp.length; i++) {
                cardp[i].style.display='block'

                
            }
            <div className="bottom">

            </div>

            
        }
        if (number==3) {
            lihchh[2].style.color='orange'
            for (let i = 0; i < cardp.length; i++) {
                cardp[i].style.display='block'

                
            }
            for (let i = 0; i < cardw.length; i++) {
                cardw[i].style.display='block'

            }
            
        } 

        
    }

  return (
    <section className='all' id='all'>
     
        <div className="info" >
            <h1>All products</h1>
            <ul>
                <li onClick={()=>active(1)} id='li1'> <h3>watches</h3></li>
                <li onClick={()=>active(2)} id='li2'><h3>phones</h3></li>
                <li onClick={()=>active(3)} id='li1'> <h3>All</h3></li>
            </ul>
        </div>
        <div className="cards">
          
            
            {
                watch.map((element,index)=>{
                    return(<>
                    <div className="cardw" key={index}>
                        <img src={element.img} alt="" />
                        <h2>{element.h2}</h2>
                        <h4>price:<span>{element.price}</span></h4>
                        <p>Social media apps, watch, blood pressure and heart rate tracking</p>
                        <button onClick={()=>addToCart(element.id)}>Add to cart</button>
                    </div>
                        
                    </>

                    )
                })
            }
            {
                phone.map((element,index)=>{
                    return(<>
                    <div className="cardp" key={index}>
                        <img src={element.img} alt="" />
                        <h2>{element.h2}</h2>
                        <h4>price:<span>{element.price}</span></h4>
                        <p>Social media apps, watch, blood pressure and heart rate tracking</p>
                        <button onClick={()=>addToCart(element.id)}>Add to cart</button>
                    </div>
                        
                    </>

                    )
                })
            }
        </div>
       
    </section>
  )
}
