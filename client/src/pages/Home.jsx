import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Featured from '../components/Featured';
import List from '../components/List';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollShow from '../components/ScrollShow';
import Ads from '../components/Ads';
import Available from '../components/Available';

const Home = ({ type }) => {

    const [moviesList, setMovieList] = useState([]);
    const [genre, setCategory] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `https://movie-deck.herokuapp.com/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                        }
                    }
                );
                setMovieList(res.data);
            } catch (error) {

            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <section className="">
            <div className="bg-[#203A43]">
                <Navigation />
                <Featured type={type} setCategory={setCategory} />
                <Available />
                <ScrollShow />
                {
                    moviesList.map((movielist) => (
                        <List movielist={movielist} />
                    ))
                }
                <Ads />
            </div>
            <Footer />
        </section>
    )
};

export default Home;