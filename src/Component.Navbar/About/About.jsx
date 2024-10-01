import React from 'react'
import "./about.css"
import artImage from '../../assets/art.png.png'
import myImage from "../../assets/me.png"

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={artImage} alt="Close" />
            </div>
            <div className='about-section'>
                <div className='section1'>
                    <img src={myImage} className='about2' />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>As a front-end developer, I specialize in creating visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript frameworks like React. I focus on delivering responsive, interactive designs that enhance user experience and performance.</p>
                        <p>I am passionate about coding and continuously learning the latest technologies to build modern, dynamic web applications. My goal is to blend creativity with technical expertise to create seamless digital experiences for users across all devices.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
                        <div className='about-skill'><p>React.JS</p><hr style={{ width: "80%" }} /></div>
                        <div className='about-skill'><p>JavaScripts</p><hr style={{ width: "80%" }} /></div>
                        <div className='about-skill'><p>BootStrap</p><hr style={{ width: "80%" }} /></div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>01+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>5+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>3+</h1>
                    <p>HAPPY CLIENT</p>
                </div>
            </div>
        </div>
    )
}

export default About
