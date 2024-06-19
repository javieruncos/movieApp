// import React from 'react';
// import { useEffect, useState } from 'react';
// import '../../assets/style/SliderMovie.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/swiper-bundle.css';
// import { Pagination, Navigation } from 'swiper/modules';
// import { getMovieCategoria } from '../../helpers/app';
// const SliderCategoria = ({ categoria, lgShow, setLgShow, movieId, setMovieId }) => {

//     const [movies, setMovies] = useState([])


//     useEffect(() => {
//         const storedMovies = JSON.parse(localStorage.getItem(`movies_${categoria}`));
//         if (storedMovies) {
//             setMovies(storedMovies);
//         } else {
//             getMovieCategoria(categoria).then(resp => {
//                 setMovies(resp.Search);
//                 localStorage.setItem(`movies_${categoria}`, JSON.stringify(resp.Search));
//             });
//         }
//     }, [])

//     const handleClick = (id) => {
//         setLgShow(true)
//         setMovieId(id)
//     }
   

//     return (
//         <>
//         <Swiper
//             slidesPerView={7}
//             centeredSlides={false}
//             spaceBetween={6}
//             navigation={true}
//             modules={[Pagination, Navigation]}
//             breakpoints={{
//                 // Cuando la ventana tiene >= 320px de ancho, muestra 2 elementos
//                 599: {
//                     slidesPerView: 2,
//                     spaceBetween: 10
//                 },
//                 // Cuando la ventana tiene >= 768px de ancho, muestra 7 elementos
//                 768: {
//                     slidesPerView: 7,
//                     spaceBetween: 6
//                 }
//             }}
//             className="mySwiper"
//         >
//             {
//                 movies.map(movie => (
//                     <SwiperSlide key={movie.imdbID} onClick={() => handleClick(movie.imdbID)}>
//                         <div className='game'>
//                             <img src={movie.Poster} alt="" />
//                         </div>
//                     </SwiperSlide>
//                 ))
//             }
//         </Swiper>
//     </>
//     );
// };

// export default SliderCategoria;
import React, { useEffect, useState } from 'react';
import '../../assets/style/SliderMovie.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import { getMovieCategoria } from '../../helpers/app';

const SliderCategoria = ({ categoria, lgShow, setLgShow, movieId, setMovieId }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem(`movies_${categoria}`));
        if (storedMovies) {
            setMovies(storedMovies);
        } else {
            getMovieCategoria(categoria).then(resp => {
                setMovies(resp.Search);
                localStorage.setItem(`movies_${categoria}`, JSON.stringify(resp.Search));
            });
        }
    }, [categoria]);

    const handleClick = (id) => {
        setLgShow(true);
        setMovieId(id);
    }

    return (
        <Swiper
            slidesPerView={7}
            centeredSlides={false}
            spaceBetween={6}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            breakpoints={{
                320: { // Cuando la ventana tiene >= 320px de ancho, muestra 2 elementos
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                768: { // Cuando la ventana tiene >= 768px de ancho, muestra 7 elementos
                    slidesPerView: 7,
                    spaceBetween: 6
                }
            }}
            className="mySwiper"
        >
            {
                movies.map(movie => (
                    <SwiperSlide key={movie.imdbID} onClick={() => handleClick(movie.imdbID)}>
                        <div className='game'>
                            <img src={movie.Poster} alt={movie.Title} />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default SliderCategoria;