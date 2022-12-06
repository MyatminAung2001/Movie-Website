import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const ListItem = ({ movieData, index }) => {

    const [movies, setMovies] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(
                    'https://movie-deck.herokuapp.com/movies/find/' + movieData, {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                        }
                    }
                );
                setMovies(res.data);
            } catch (error) {

            }
        };
        getMovie();
    }, [movieData]);

    return ( 
        <Link to="/detail" state={movies}>
            <motion.div 
                whileTap={{ scale: 0.95 }} 
                className="relative w-[90%] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[200px] cursor-pointer"
            >
                <img 
                    src={movies?.image}
                    alt="" 
                    className="w-[100%] h-[100%] object-cover rounded-lg"
                />
            </motion.div>
        </Link>
    )
};

export default ListItem;