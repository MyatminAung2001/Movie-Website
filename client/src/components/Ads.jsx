import React from 'react';

import AdsImg from '../images/cta-logo-two.png'

const Ads = () => {
    return (
        <section className="w-[100%] py-5">
            <img 
                src={AdsImg}
                alt="" 
                className="w-[90%] sm:w-[50%] m-auto"
             />
        </section>
    )
};

export default Ads;