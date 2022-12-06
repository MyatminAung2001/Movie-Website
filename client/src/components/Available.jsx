import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { available } from '../utils/data';

const Available = () => {
    return (
        <section className="px-5 py-8 sm:px-16">
            <header className="text-white font-semibold text-lg mb-3">
                Available Movies & Series from
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
                        available.map((data) => (
                            <SwiperSlide>
                                <div className="w-[90%] sm:w-[280px]">
                                    <img 
                                        src={data.image}
                                        alt="" 
                                        className="w-[100%] bg-[#0F2027] rounded-md cursor-pointer"
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper> 
            </div>
        </section>
    )
};

export default Available;