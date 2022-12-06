import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowLeftRight } from 'react-icons/bs';

const ScrollShow = () => {
    return (
        <section className="w-[100%] relative pt-5 px-5">
            <motion.div 
                initial={{
                    x: -10,
                }}
                  animate={{
                    x: 60,
                }}
                transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 1,
                    duration: 1,
                }}
                className="absolute right-[90px] sm:right-[70px] flex gap-3"
            >
                <p className="text-white">
                    Scroll
                </p>
                <BsArrowLeftRight size={25} color="#ffffff" />
            </motion.div>
        </section>
    )
};

export default ScrollShow;