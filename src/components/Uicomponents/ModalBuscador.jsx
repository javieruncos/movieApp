import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "../../assets/style/ModalBuscador.css";
import { getMovieCategoria } from '../../helpers/app';

const ModalBuscador = ({ show, setShow }) => {

    const [filterMovie, setFilterMovie] = useState([])
    const [nameMovie, setnameMovie] = useState("action")


    const handleChange = (e) => {
        setnameMovie(e.target.value)
    }


    useEffect(() => {
        getMovieCategoria(nameMovie).then(resp => {
            setFilterMovie(resp.Search || []);
            localStorage.setItem(`movies_${nameMovie}`, JSON.stringify(resp.Search));
            console.log(resp.Search)
        });

    }, [nameMovie])

    return (
        <>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)} className='modal-buscador'>
                <Modal.Header closeButton className='modal-buscador-header py-5'>
                    <div className='modal-buscador-input'>
                        <span><i className="bi bi-search fs-4"></i></span>
                        <input type="text" onChange={handleChange} />
                    </div>
                </Modal.Header>
                <Modal.Body className='modal-buscador-body'>
                    <div className='container-fluid'>
                        <div className='row'>
                            {
                                filterMovie.length === 0 ? <h1 className='text-center'>No hay resultados</h1> :
                                    filterMovie.map((movie) => (
                                        <>
                                            <div className='col-6 col-md-3 col-lg-3'>
                                                <div className='modal-buscador-cards my-3'>
                                                    <img src={movie.Poster} alt={movie.Title} />
                                                </div>

                                            </div>
                                        </>

                                    ))}
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        </>
    );
};

export default ModalBuscador;