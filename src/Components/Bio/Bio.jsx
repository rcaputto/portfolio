import React from 'react';
import './Bio.css';
import fotoPerfil from '../../Public/images/fotoPerfil.jpg'

function Bio (){
    return (
        <>
            <div className="title">
                <h1 className='copyTitle'>QUIEN SOY</h1>
                <div className='perfilFlex'>
                <img className='fotoPerfil' src = {fotoPerfil} alt = 'perfil'/>
                </div>
                <h2 className='copyBio'>
                Hola, soy Rodolfo, un ¿aprendedor? serial! Estoy 
                en constante búsqueda por conocer y aprender 
                cosas nuevas. 
                Te cuento que soy Desarrollador Web. Me apasiona
                el diseño y desarrollo de sitios 100% funcionales y 
                1000% estéticos. Creo que un buen sitio surje de 
                la combinación armónica de necesidad funcional y 
                estilo. 
                Más abajo te cuento cuál es el stack con el que 
                trabajo, pero, como estoy aprendiendo todo el tiempo
                no es exclusivo ni excluyente.
                </h2>
            
            </div>
        
        </>

    )
}

export default Bio;