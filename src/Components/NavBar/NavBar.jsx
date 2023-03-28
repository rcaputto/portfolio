import React from 'react';
import './NavBar.css'
import {useState} from 'react';
import logo1 from '../../Public/images/logo1.png';


function Footer (){
    const[isActive, setIsActive] = useState (false);
const handleClick = event =>{
        setIsActive(current => !current)
}  
    
    return (
        <body>
        <header>
         <div id='navBar'>
            <img src={logo1} alt='logo'/>
            <div className="nav-bar sticky">
            <nav>
            
                    <div id="menu-desktop">
                        <a href="home">Home</a>
                        <a href="#bio">About</a>
                        <a href="#work">Work</a>
                        <a href="#contact">Contacto</a>
                    </div>
                    <div id="menu-mobile" >
                        <div id="burguer" >
                            <span id='line1'className={isActive? 'active1' :''} onClick ={handleClick}></span>
                            <span id='line2'className={isActive? 'active2' :''} onClick ={handleClick}></span>
                            <span id='line3'className={isActive? 'active3' :''} onClick ={handleClick}></span>
                        </div>
                        <div id='mobile'>
                        <a href="home" className={isActive? 'open' :'hidden'} onClick ={handleClick}>Home</a>
                        <a href="#bio" className={isActive? 'open' :'hidden'} onClick ={handleClick}>About</a>
                        <a href="#work" className={isActive? 'open' :'hidden'} onClick ={handleClick}>Work</a>
                        <a href="#contact" className={isActive? 'open' :'hidden'} onClick ={handleClick}>Contacto</a>
                    </div>
                    
                    </div>
                </nav>
            </div>
            </div>
        </header>
        
        
    </body>
    )
}

export default Footer