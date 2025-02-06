import React from 'react'
import "./about.css"
import artImage from '../../assets/art.png.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={artImage} alt="Close" />
            </div>
            <div className='about-section'>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>As a front-end developer, I craft responsive, user-friendly interfaces using HTML, CSS, and React. I’m passionate about coding, learning new technologies, and creating seamless, interactive web experiences that perform well across all devices.</p>
                        {/* <p>I am passionate about coding and continuously learning the latest technologies to build modern, dynamic web applications. My goal is to blend creativity with technical expertise to create seamless digital experiences for users across all devices.</p> */}
                    </div>
                    
                    <div className="skills-container">
                        {/* Languages Card */}
                        <div className="skill-card">
                            <h3>Languages</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>


                        {/* Frameworks Card */}
                        <div className="skill-card">
                            <h3>Frameworks</h3>
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                                <li>Next.js</li>
                                <li>Scrum</li>
                            </ul>
                        </div>



                        {/* Tools Card */}
                        <div className="skill-card">
                            <h3>Tools</h3>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>VS Code</li>
                                <li>Discord</li>
                            </ul>
                        </div>
                    </div>


                    {/* <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
                        <div className='about-skill'><p>React.JS</p><hr style={{ width: "80%" }} /></div>
                        <div className='about-skill'><p>Next.JS</p><hr style={{ width: "80%" }} /></div>
                        <div className='about-skill'><p>JavaScripts</p><hr style={{ width: "80%" }} /></div>
                        <div className='about-skill'><p>BootStrap</p><hr style={{ width: "80%" }} /></div>
                        <div className='about-skill'><p>Agile & Scrum</p><hr style={{ width: "80%" }} /></div>
                    </div> */}
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
