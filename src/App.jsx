import React, { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Inicio from './components/view/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/common/Menu';


function App() {
  const [movieId, setMovieId] = useState("")
  return (
    <>

      <div className='App'>
        <BrowserRouter>
          <Menu></Menu>
          <Routes>
            <Route path='/' element={<Inicio movieId={movieId} setMovieId={setMovieId}></Inicio>}></Route>
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
