import React from 'react';
import { useState } from 'react';
import "../../assets/style/Inicio.css";
import PortadaInicio from '../Uicomponents/PortadaInicio';
import SliderMovie from '../Uicomponents/SliderMovie';
import ModalMovie from '../Uicomponents/ModalMovie';
import SliderCategoria from '../Uicomponents/SliderCategoria';
const Inicio = ({ movieId ,setMovieId}) => {

    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <div className='main-inicio'>
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
        </>
    );
};

export default Inicio;  