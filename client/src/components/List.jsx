import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ListItem from './ListItem';

const List = ({ movielist }) => {

    return (
        <section className="px-5 py-8 sm:px-16">
            <header className="text-white font-semibold text-lg mb-3">
                {movielist.title}
            </header>
            <div className="w-full flex gap-5">
                <Swiper
                    breakpoints = {{
                        376: {
                            width: 376,
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            width: 768,
                            slidesPerView: 4,
                            spaceBetween: 200
                        },
                        1280: {
                            width: 1260,
                            slidesPerView: 4,
                        },
                        1536: {
                            width: 1536,
                            slidesPerView: 5,
                            spaceBetween: 85
                        }
                    }}
                >
                    {
                        movielist.content.map((movieData, index) => (
                            <SwiperSlide>
                                <ListItem movieData={movieData} index={index} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper> 
            </div>
        </section>
    )
};

export default List;