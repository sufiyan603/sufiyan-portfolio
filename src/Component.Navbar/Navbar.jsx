import React, { useRef, useState } from 'react'
import "./navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    
    const menuref = useRef();
    const navOpen = ()=> {
        menuref.current.style.right="0";
        console.log(navOpen)
    };
    const navClose = ()=> {
        menuref.current.style.right="-380px"
    }

    return (
        <div className='nav-list'>
            <img src="src\assets\we1.png" alt='s' className='logo'></img>
            <img src='src\assets\menu.png' onClick={navOpen} className='nav-open' />
            <ul ref={menuref} className='nav-ul'>
            <img src='src\assets\close.png' onClick={navClose} className='nav-close'/>
                <li><AnchorLink className='anchor-link'  href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link'  href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link'  href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link'  href='#work'><p onClick={() => setMenu("work")}>My Work</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link'  href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
            </ul>
            <div className='nav-connect'><AnchorLink className='anchor-link'  href='#contact'>Connect with me</AnchorLink></div>
        </div>
    )
}


export default Navbar