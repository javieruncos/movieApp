import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../../assets/style/ModalMovie.css';
import { getModalId } from '../../helpers/app';
const ModalMovie = ({ lgShow, setLgShow, movieId }) => {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getModalId(movieId).then((res) => {
            setMovie(res)
            console.log(res)
        })
    }, [movieId])


    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                className='modal-movie'
            >
                <Modal.Header closeButton className='header-modal'>
                    <div className='modal-contenedor-img'>
                        <div className='modal-img'>
                            <img src={movie.Poster} alt="" />
                        </div>
                        <div className='container modalcontenido-movie'>
                            <h3 className='text-light'>{movie.Title}</h3>
                            <div className='info-adicional'>
                                <span>{movie.Type}</span>
                                <span>{movie.Year}</span>
                                <span>{movie.Runtime}</span>
                                <span>{movie.imdbRating}</span>
                            </div>
                            <p>
                                {movie.Plot}
                            </p>
                            <div>
                                <h5>elenco</h5>
                                <p>{movie.Actors}</p>
                            </div>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>
                
                    <div className='modal-contenido container'>
                        <div className='row'>
                           <div className='col-12 col-md-6 col-lg-6'>
                              <div className='modal-movie-card my-2'>

                              </div>
                           </div>
                           <div className='col-12 col-md-6 col-lg-6'>
                              <div className='modal-movie-card my-2'>

                              </div>
                           </div>
                           <div className='col-12 col-md-6 col-lg-6'>
                              <div className='modal-movie-card my-2'>

                              </div>
                           </div>
                           <div className='col-12 col-md-6 col-lg-6'>
                              <div className='modal-movie-card my-2'>

                              </div>
                           </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalMovie;