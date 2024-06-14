import React from 'react';
import '../../assets/style/SliderMovie.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const SliderMovie = () => {
    return (
        <>
            <Swiper
                slidesPerView={8}
                centeredSlides={false}
                spaceBetween={6}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='game'>
                        <img src="https://th.bing.com/th/id/OIP.A69cHuH21i8r_fo8RAe_uwHaD4?rs=1&pid=ImgDetMain" alt="" />
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='game'>
                        <img src="https://th.bing.com/th/id/OIP.A69cHuH21i8r_fo8RAe_uwHaD4?rs=1&pid=ImgDetMain" alt="" />
                        <div className='capaGame-slider'>
                            <div>
                                <span>name juego</span>
                                <span>rating</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='game'>
                        <img src="https://th.bing.com/th/id/OIP.A69cHuH21i8r_fo8RAe_uwHaD4?rs=1&pid=ImgDetMain" alt="" />
                        <div className='capaGame-slider'>
                            <div>
                                <span>name juego</span>
                                <span>rating</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='game'>
                        <img src="https://th.bing.com/th/id/OIP.A69cHuH21i8r_fo8RAe_uwHaD4?rs=1&pid=ImgDetMain" alt="" />
                        <div className='capaGame-slider'>
                            <div>
                                <span>name juego</span>
                                <span>rating</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='game'>
                        <img src="https://th.bing.com/th/id/OIP.A69cHuH21i8r_fo8RAe_uwHaD4?rs=1&pid=ImgDetMain" alt="" />
                        <div className='capaGame-slider'>
                            <div>
                                <span>name juego</span>
                                <span>rating</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='game'>
                        <img src="https://th.bing.com/th/id/OIP.A69cHuH21i8r_fo8RAe_uwHaD4?rs=1&pid=ImgDetMain" alt="" />
                        <div className='capaGame-slider'>
                            <div>
                                <span>name juego</span>
                                <span>rating</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='game'>
                        <img src="https://th.bing.com/th/id/OIP.A69cHuH21i8r_fo8RAe_uwHaD4?rs=1&pid=ImgDetMain" alt="" />
                        <div className='capaGame-slider'>
                            <div>
                                <span>name juego</span>
                                <span>rating</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='game'>
                        <img src="https://th.bing.com/th/id/OIP.A69cHuH21i8r_fo8RAe_uwHaD4?rs=1&pid=ImgDetMain" alt="" />
                        <div className='capaGame-slider'>
                            <div>
                                <span>name juego</span>
                                <span>rating</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='game'>
                        <img src="https://th.bing.com/th/id/OIP.A69cHuH21i8r_fo8RAe_uwHaD4?rs=1&pid=ImgDetMain" alt="" />
                        <div className='capaGame-slider'>
                            <div>
                                <span>name juego</span>
                                <span>rating</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderMovie;