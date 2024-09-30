import React from 'react'
import "./services.css"
import Services_data from "../../assets/service_data.jsx"
const Services = () => {
  return (
    <div id='services' className='services'>
    <div className='services-title'>
        <h1>My Services</h1>
        <img src='src\assets\art.png.png' />
    </div>
    <div className='services-container'>
     {Services_data.map((Service, index)=>{
        return <div key={index} className='services-format'>
            <h3>{Service.s_no}</h3>
            <h2>{Service.s_name}</h2>
            <p>{Service.s_desc}</p>
              <div className='services-readmore'>
                <p>Read More</p>
                <img src='src/assets/icon.png' />
            </div>
        </div>
       
     })}  
     
    </div>
    </div>
  ) 
}

export default Services   
