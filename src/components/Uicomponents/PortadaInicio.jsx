import React, { useEffect ,useState} from 'react';
import '../../assets/style/Portada.css';
import { getModalId } from '../../helpers/app';
import portadaSpiderman from '../../assets/img/spiderman-home.webp';
const PortadaInicio = () => {

    const [moviePortada, setMoviePortada] = useState({})

   useEffect(() => {
       getModalId('tt10872600').then(resp => {
           setMoviePortada(resp)
       })
    }, [])

    return (
        <div className='portada'>
            <img src={portadaSpiderman} alt="" />
            <div className='portada-capa-fondo'>
                <div className='portada-titulo'>
                    <h1 className='display-3 fw-bold'>{moviePortada.Title}</h1>
                    <div className='portada-descripcion'>
                        <div className='portada-info'>
                          <span>{moviePortada.Genre}</span>
                          <span>{moviePortada.Year}</span>
                          <span>{moviePortada.Runtime}</span>
                        </div>
                        <div>
                            <p>{moviePortada.Plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortadaInicio;