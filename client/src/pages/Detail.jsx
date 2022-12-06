import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Detail = () => {

    const location = useLocation();
    const movie = location.state;

    console.log(location);
    // console.log(movie)

    return (
        <div className="relative w-[100%] h-[100vh]">
            <Link to="/">
                <div className="absolute z-[200] top-0 flex gap-2 py-2 px-6">
                    <BsBoxArrowLeft size={25} color="#ffffff" />
                </div>
            </Link>
            <img 
                src={movie.image}
                alt="" 
                className="w-[100%] h-[100%] object-cover brightness-[60%]"
            />
            <div className="absolute w-[100%] px-4 py-2 sm:px-16 bottom-[20px] sm:flex sm:justify-between">
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1, y: -200}}
                    transition={{ duration: 1.2 }}
                    className="sm:w-[60%] mb-5"
                >
                    <header className="text-white text-[3rem] sm:text-[5rem] font-bold tracking-wider">
                        {movie.title}
                    </header>
                    <p className="text-white text-xs mb-3 flex gap-3 sm:text-sm">
                        {movie.produced}
                        <span>
                            {movie.genre}
                        </span>
                        <span>
                            {movie.limit}
                        </span>
                    </p>
                    <p className="text-[#ced4da] tracking-wide text-sm mb-5 w-[90%] sm:w-[70%] sm:text-[1.1rem]">
                        {movie.description}
                    </p>
                    <div className="flex items-center gap-3">
                        <motion.button 
                            whileTap={{ scale: 1.05 }}
                            whileHover={{ scale: 0.9 }}
                            className="flex items-center justify-center gap-2 px-3 py-3 sm:px-4 sm:py-3 rounded bg-[#e63946]"
                        >
                            <FaPlay color="#ffffff" />
                            <span className="font-semibold text-sm sm:text-lg text-white uppercase">
                                Play Now
                            </span>
                        </motion.button>
                        <motion.button 
                            whileTap={{ scale: 1.05 }}
                            whileHover={{ scale: 0.9 }}
                            className="flex items-center justify-center gap-2 px-3 py-3 sm:px-4 sm:py-3 rounded bg-[#203A43]"
                        >
                            <span className="font-semibold text-sm sm:text-lg text-white uppercase">
                                Trailer
                            </span>
                        </motion.button>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1, y: -200}}
                    transition={{ duration: 1.2 }}
                    className="sm:w-[40%]"
                >
                    <p className="text-white font-semibold text-lg mb-4">
                        Posters
                    </p>
                    <div className="hidden sm:flex sm:flex-wrap gap-x-3 gap-y-3">
                        <img 
                            src={movie.imagePoster}
                            alt=""
                            className="w-[180px] h-[120px] object-cover rounded-md brightness-[90%]"
                        />
                        <img 
                            src={movie.imagePosterTwo}
                            alt=""
                            className="w-[180px] h-[120px] object-cover rounded-md brightness-[90%]"
                        />
                        <img 
                            src={movie.imagePosterThree}
                            alt=""
                            className="w-[180px] h-[120px] object-cover rounded-md brightness-[90%]"
                        />
                        <img 
                            src={movie.imagePosterFour}
                            alt=""
                            className="w-[180px] h-[120px] object-cover rounded-md brightness-[90%]"
                        />
                    </div>
                    <div className="w-full sm:hidden">
                        <Swiper
                            breakpoints = {{
                                376: {
                                    width: 376,
                                    slidesPerView: 2,
                                    spaceBetween: 5
                                },
                            }}
                        >
                            
                            <SwiperSlide>
                                <img 
                                    src={movie.imagePoster}
                                    alt=""
                                    className="w-[180px] h-[120px] object-cover rounded-md brightness-[90%]"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img 
                                    src={movie.imagePosterTwo}
                                    alt=""
                                    className="w-[180px] h-[120px] object-cover rounded-md brightness-[90%]"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img 
                                    src={movie.imagePosterThree}
                                    alt=""
                                    className="w-[180px] h-[120px] object-cover rounded-md brightness-[90%]"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img 
                                    src={movie.imagePosterFour}
                                    alt=""
                                    className="w-[180px] h-[120px] object-cover rounded-md brightness-[90%]"
                                />
                            </SwiperSlide>
                        </Swiper>   
                    </div>
                </motion.div>
            </div>
        </div>
    ) 
};

export default Detail