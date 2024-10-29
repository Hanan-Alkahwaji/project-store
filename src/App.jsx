
import './App.css'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav'
import  Items  from "./Components/Items/Items"
import Best from "./Components/Best/Best";
import All from "./Components/All/All";
import Color from "./Components/Color/Color";
import Footer from './Components/Footer/Footer';


function App() {
  let arr=[{h1:'The Best new watch',img:'/project-store/assets/imgs/watch2.png'},{h1:"The Best new phone",img:'/project-store/assets/imgs/phoneb.png'}]
  let watch =[{id:'1',h2:'Smart Watch',img:'/project-store/assets/imgs/watch11.png',price:'200'},{id:'2',h2:'Smart Watch',img:'/project-store/assets/imgs/watch22.png',price:'200'}
    ,{id:'3',h2:'Smart Watch',img:'/project-store/assets/imgs/watch44.png',price:'250'},{id:'4',h2:'Smart Watch',img:'/project-store/assets/imgs/watch2.png',price:'200'},
    {id:'5',h2:'Smart Watch',img:'/project-store/assets/imgs/watch33.png',price:'270'},{id:'6',h2:'Smart Watch',img:'/project-store/assets/imgs/watch55.png',price:'280'}]
  let phone=[{id:'7',h2:'Smart phone',img:'/project-store/assets/imgs/phone11.png',price:'300'},{id:'8',h2:'Smart phone',img:'/project-store/assets/imgs/phone22.png',price:'350'},
    {id:'9',h2:'Smart phone',img:'/project-store/assets/imgs/phone33.png',price:'400'},{id:'10',h2:'Smart phone',img:'/project-store/assets/imgs/phone4.png',price:'360'},
    {id:'11',h2:'Smart phone',img:'/project-store/assets/imgs/phone.png',price:'300'},{id:'12',h2:'Smart phone',img:'/project-store/assets/imgs/phoneb.png',price:'350'}

  ]


  return (
    <>
      <Nav logo={"/project-store/assets/imgs/logo.png"} ul={["Home","New","BuyProducts","Color"]} icons={["/project-store/assets/imgs/moon.png","/project-store/assets/imgs/cart.png"]} />
   <Hero/>
   <Items />
   <Best items={arr}/>
   <All watch={watch} phone={phone} />
   <Color />
   <Footer />
  
    
  
    </>
  )
}

export default App
