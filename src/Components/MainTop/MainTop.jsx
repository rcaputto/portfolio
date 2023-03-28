import React from 'react';
import './MainTop.css';
import Image from '../../Public/images/computadora.jpg';


function MainTop() {
    let fullStack = '{full stack}'
    let coder = '<coder/>'

    return (
        <>
            <div className='mainTop'>
            <img src= {Image} alt = 'fondo'/>
            
            <h2 className='stack'>{fullStack}</h2>
            <h3 className='stackCopy'>Html - Css- Node.Js - Express - React </h3>
            <br/><h3 className='stackCopy1'> Bootstrap - Sql - Design Tools</h3>
            <h2 className='coder'>{coder}</h2>
            <h3 className='coderCopy'>Código limio, elegante y eficiente </h3>
            <br/><h3 className='coderCopy1'> Front End - Back End</h3>
            </div>
        </>
    )
}

export default MainTop