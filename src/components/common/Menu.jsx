import React from 'react';
import '../../assets/style/Menu.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useModal from '../../hooks/useModal';

const Menu = ({handleShow}) => {
    return (
        <header>
            <div className='Menu'>
                <div className='menu-container'>
                    <h2 className='text-danger fw-bold'>MOVIEFLIX</h2>
                    <button className='menu-button' onClick={handleShow} >
                        <i className="bi bi-search fs-4"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Menu;