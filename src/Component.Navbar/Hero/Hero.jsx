import React from 'react'
import "./hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myImage from '../../assets/me.png'
const Hero = () => {
  return (<>
    <div id='home' className='hero'>
      <div className='img1'><img src={myImage}></img><br /></div>
      <h1><span>I'm Sufiyan Raza Khan</span>, frontend developer based in Ind. </h1><br />
      <div className='hero-action'>
        <AnchorLink className='anchor-link' href='#contact'><div className='hero-connect'>Contact Me</div></AnchorLink>
        <a href="resume.pdf.pdf" target="_blank" className='hero-resume' >
          <div>
            My Resume
          </div>
        </a>
      </div>
    </div>
  </>
  )
}

export default Hero
