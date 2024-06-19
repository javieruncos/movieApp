import React from 'react';
import '../../assets/style/Menu.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
       <header>
        <div className='Menu'>
            <div className='menu-container'>
                <h2>Peliculas</h2>
                <button className='menu-button'>
                <i className="bi bi-search fs-4"></i>
                </button>
            </div>
        </div>
       </header>
    );
};

export default Menu;