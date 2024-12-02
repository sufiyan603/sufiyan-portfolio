import React from 'react'
import "./services.css"
import Services_data from "../../assets/service_data.jsx"
import art from '../../assets/art.png.png'
import icon from '../../assets/icon.png'
import { Link } from 'react-router-dom'

const Services = () => {
  return (

    <div id='services' className='services'>
      <div className='services-title'>
        <h1>My Services</h1>
        <img src={art} />
      </div>
      <div className='services-container'>
        {Services_data.map((Service, index) => {
          return <div key={index} className='services-format'>
            <Link to={Service.path} style={{textDecoration:"none",color:"white"}} >
              <h3>{Service.s_no}</h3>
              <h2>{Service.s_name}</h2>
              <p>{Service.s_desc}</p>
              <div className='services-readmore'>
                <p>Read more</p>
                <img src={icon} />
              </div>
            </Link>
          </div>
        })
        }</div>
    </div>
  )
}

export default Services   
