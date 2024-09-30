import React from 'react'
import "./hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (<>
    <div id='home' className='hero'>
      <div className='img1'><img src='src/assets/me.png'></img><br /></div>
      <h1><span>I'm Sufiyan Raza Khan</span>, frontend developer based in Ind. </h1><br />
      <p>I am frontend developer from maharashtra, india fresher & looking for opportunity</p><br />
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' href='#contact'>Contact Me</AnchorLink></div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  </>
  )
}

export default Hero