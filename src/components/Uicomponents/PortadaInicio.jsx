import React, { useEffect ,useState} from 'react';
import '../../assets/style/Portada.css';
import { getModalId } from '../../helpers/app';
const PortadaInicio = () => {

    const [moviePortada, setMoviePortada] = useState({})

   useEffect(() => {
       getModalId('tt10872600').then(resp => {
           console.log(resp)
           setMoviePortada(resp)
       })
    }, [])

    return (
        <div className='portada'>
            <img src="https://thumb.canalplus.pro/http/unsafe/1440x810/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/114114060" alt="" />
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