import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../../assets/style/ModalMovie.css';
import { getModalId, getMovie } from '../../helpers/app';
import SpinnerModal from './SpinnerModal';

const ModalMovie = ({ lgShow, setLgShow, movieId, setMovieId }) => {
    const [movie, setMovie] = useState({})
    const [arregloSugerencia, setArregloSugerencia] = useState([])
    const [mostrarSpinner, setMostrarSpinner] = useState(true)
    const categoria = 'movie';


    useEffect(() => {
        setMostrarSpinner(true);
        getModalId(movieId).then((res) => {
            setMovie(res)
            console.log(res)
            const timeoutID = setTimeout(() => {
                setMostrarSpinner(false);
            }, 1000);

            return () => clearTimeout(timeoutID);

        })
    }, [movieId])

    const handleClick = (id) => {
        setLgShow(true)
        setMovieId(id)
    }

    useEffect(() => {
        getMovie(categoria).then((res) => {
            setArregloSugerencia(res.Search)
        })
    }, [])


    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                className='modal-movie'
            >
                <div className='modal-body'>
                    {mostrarSpinner === true ? (
                        <SpinnerModal></SpinnerModal>
                    ) : <>

                        <div className='modal-header'>
                            <Modal.Header closeButton className='header-modal' id='modal-header'>
                                <div className='modal-contenedor-img'>
                                    {mostrarSpinner === true ? (
                                        <SpinnerModal></SpinnerModal>
                                    ) :
                                        <>
                                            <div className='modal-img'>
                                                <img src={movie.Poster} alt="" />
                                            </div>
                                            <div className='container modalcontenido-movie'>
                                                <h5 className='text-light pt-3'>{movie.Title}</h5>
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
                                                    <h5 className='text-light'>Elenco</h5>
                                                    <p>{movie.Actors}</p>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </Modal.Header>
                        </div>
                        <div className='modal-body-contenido'>
                            <Modal.Body>
                                <div className='modal-contenido container'>
                                    <div className='row'>
                                        {
                                            arregloSugerencia.slice(0, 9).map((movie) => (
                                                <div className='col-6 col-md-6 col-lg-4' key={movie.imdbID} >
                                                    <div className='modal-movie-card my-2' onClick={() => handleClick(movie.imdbID)}>
                                                        <img src={movie.Poster} alt="" className='w-100' />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Modal.Body>
                        </div>
                    </>
                    }
                </div>
            </Modal>
        </>
    );
};

export default ModalMovie;