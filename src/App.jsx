import React, { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from './components/view/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [movieId, setMovieId] = useState("")
  return (
    <>
     
        <div className='App'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inicio movieId={movieId} setMovieId={setMovieId}></Inicio>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      
    </>
  )
}

export default App
