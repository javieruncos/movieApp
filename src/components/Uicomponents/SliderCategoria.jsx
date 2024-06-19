import React from 'react';
import { useEffect, useState } from 'react';
import '../../assets/style/SliderMovie.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { getMovieCategoria } from '../../helpers/app';
const SliderCategoria = ({ categoria, lgShow, setLgShow, movieId, setMovieId }) => {

    const [movies, setMovies] = useState([])


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
    }, [])

    const handleClick = (id) => {
        setLgShow(true)
        setMovieId(id)
    }
   

    return (
        <>
        <Swiper
            slidesPerView={7}
            centeredSlides={false}
            spaceBetween={6}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                movies.map(movie => (
                    <SwiperSlide key={movie.imdbID} onClick={() => handleClick(movie.imdbID)}>
                        <div className='game'>
                            <img src={movie.Poster} alt="" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </>
    );
};

export default SliderCategoria;