import React from 'react'
import './Best.css'

export default function Best({items}) {
  return (
    <section className='best' id='best'>
       <div className="container">
        {
              items.map((element,index)=>{
                return(<>
                    <div className="card" key={index}>
                        <div className="info">
                        <h1>{element.h1}</h1>
                        <p>shop now</p>

                        </div>
                       
                        <img src={element.img} alt="" />

                    </div>
                    </>
                )
              })

        }
       </div>

    </section>
  )
}
