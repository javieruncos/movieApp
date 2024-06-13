import React from 'react';
import '../../assets/style/Portada.css';
const PortadaInicio = () => {
    return (
        <div className='portada'>
            <img src="https://www.latercera.com/resizer/FrMhF7IRcL9vNjs9yJF2sAt9_Ak=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/TO6QON6RGFDQRKGRDHGD3PXMRE.jpg" alt="" />
            <div className='portada-capa-fondo'>
                <div className='portada-titulo'>
                    <h1 className='display-3'>titulo Pelicula</h1>
                    <div className='portada-descripcion'>
                        <div className='portada-botones'>
                            <button>Comenzar</button>
                            <button>Comenzar</button>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, eum rerum fugiat fugit sint pariatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortadaInicio;