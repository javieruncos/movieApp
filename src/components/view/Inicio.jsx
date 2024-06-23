import React from 'react';
import { useState } from 'react';
import "../../assets/style/Inicio.css";
import PortadaInicio from '../Uicomponents/PortadaInicio';
import SliderMovie from '../Uicomponents/SliderMovie';
import ModalMovie from '../Uicomponents/ModalMovie';
import SliderCategoria from '../Uicomponents/SliderCategoria';
import ModalBuscador from '../Uicomponents/ModalBuscador';
import useModal from '../../hooks/useModal';
const Inicio = ({ movieId ,setMovieId,show,setShow}) => {

    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <div className='main-section'>
                <div>
                    <PortadaInicio></PortadaInicio>
                    <div className='slider mt-2'>
                        <span className='fs-5'>Your Next Story</span>
                        <SliderMovie
                            categoria='movie'
                            lgShow={lgShow}
                            setLgShow={setLgShow}
                            movieId={movieId}
                            setMovieId={setMovieId}

                        ></SliderMovie>
                    </div>
                    <div className='slider'>
                        <span className='fs-5'>series</span>
                        <SliderMovie
                            categoria="series"
                            lgShow={lgShow}
                            setLgShow={setLgShow}
                            movieId={movieId}
                            setMovieId={setMovieId}
                        ></SliderMovie>
                    </div>
                    <div className='slider'>
                        <span className='fs-5'>movies</span>
                        <SliderCategoria
                            categoria="game"
                            lgShow={lgShow}
                            setLgShow={setLgShow}
                            movieId={movieId}
                            setMovieId={setMovieId}
                        ></SliderCategoria>
                    </div>
                    <div className='slider'>
                        <span className='fs-5'>Fast & Furious</span>
                        <SliderCategoria
                            categoria="fast"
                            lgShow={lgShow}
                            setLgShow={setLgShow}
                            movieId={movieId}
                            setMovieId={setMovieId}
                        ></SliderCategoria>
                    </div>
                    <div className='slider'>
                        <span className='fs-5'>movie</span>
                        <SliderCategoria
                            categoria="runner"
                            lgShow={lgShow}
                            setLgShow={setLgShow}
                            movieId={movieId}
                            setMovieId={setMovieId}
                        ></SliderCategoria>
                    </div>
                </div>
            </div>
            <ModalMovie lgShow={lgShow} setLgShow={setLgShow} movieId={movieId} setMovieId={setMovieId}></ModalMovie>
            <ModalBuscador show={show} setShow={setShow} lgShow={lgShow} setLgShow={setLgShow} movieId={movieId} setMovieId={setMovieId}></ModalBuscador>
        </>
    );
};

export default Inicio;  