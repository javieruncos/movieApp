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
                        <img src={movie.Poster} alt="" />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-contenido container'>
                        <h3 className='text-light'>{movie.Title}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div>
                            <h5>elemenco</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sint?</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalMovie;