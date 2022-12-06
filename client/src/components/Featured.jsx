import React, { useState, useEffect } from 'react';
import { FaPlay, FaInfo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

const Featured = ({ type }) => {

    const [randomMovie, setRandomMovie] = useState({});

    useEffect(() => {
        const getRandomPoster = async () => {
            try {
                const res = await axios.get(
                    `https://movie-deck.herokuapp.com/movies/random?type=${type}`, {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                        }
                    }
                )
                setRandomMovie(res.data[0]);
            } catch (error) {
                
            }
        };
        getRandomPoster();
    }, [type]);
    
    return (
        <section className="relative h-[90vh]">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute z-[1100] left-[15px] sm:left-[15px] top-2 sm:top-[80px]"
            >
                <span className="text-white hidden">
                    { type === "movies" ? "Movies" : "Series"}
                </span>
                <select 
                    name="genre" 
                    id="genre" 
                    className="focus:outline-none ml-11 px-1 py-1 bg-[#203A43] text-white rounded-md"
                >
                    <option>
                        Category
                    </option>
                    <option className="focus:outline-none" value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi/Adventure</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </motion.div>
            <img 
                src={randomMovie.image}
                alt="" 
                className="w-[100%] h-[100%] object-cover brightness-[60%]"
            />
            <div className="absolute bottom-[30px] left-[20px] sm:bottom-[60px] sm:left-[60px]">
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1, y: -200}}
                    transition={{ duration: 1.2 }}
                    className="text-white font-bold text-3xl sm:text-[3rem] mb-5"
                >
                    {randomMovie.title}
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1, y: -200}}
                    transition={{ duration: 1.1 }}
                    className="w-[65%] sm:w-[50%] text-white text-base mb-5 sm:text-xl font-light"
                >
                    {randomMovie.description}
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 1, y: -200}}
                    transition={{ duration: 1 }}
                    className="flex items-center gap-3"
                >
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
                        <FaInfo color="#ffffff" />
                        <span className="font-semibold text-sm sm:text-lg text-white uppercase">
                            More Info
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
};

export default Featured;