import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

import LoginImg from '../images/LoginBg.jpg';
import Logo from '../images/tv.png';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const startRegisterHandler = () => {
        setEmail(emailRef.current.value);
    };

    const finishRegisterHandler = async (event) => {
        event.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);

        try {
            await axios.post('https://movie-deck.herokuapp.com/auth/register', { email, username, password, });
            navigate("/login");
        } catch (error) {

        }
    };

    return (
        <section className="relative w-[100%] h-[100vh]">
            <img 
                src={LoginImg}
                alt="" 
                className="w-[100%] h-[100%] object-cover"
            />
            <div className="absolute top-0 w-[100%]">
                <div className="px-3 sm:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.2 }}
                            exit={{ scale: 1 }}
                            transition={{ 
                                repeat: Infinity,
                                repeatDelay: 0.2
                            }}
                        >
                            <img 
                                src={Logo} 
                                alt="logo" 
                                className="w-[35px] sm:w-[45px]"
                            />
                        </motion.div>
                        <p className="text-white text-lg sm:text-2xl font-bold tracking-wider"> 
                            Moviedeck
                        </p>
                    </div>
                    <Link to='/login'>
                        <motion.button 
                            whileTap={{ scale: 0.8 }}
                            className="px-4 py-2 font-normal text-sm sm:text-base tracking-wider bg-[#e63946] text-white rounded-md"
                        >
                                Sign In
                        </motion.button>
                    </Link>
                </div>
            </div>
            <div className="w-[280px] sm:w-[380px] px-3 py-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <header className="text-left text-white text-3xl font-bold mb-5 tracking-wider">
                    Sign Up
                </header>
                <p className="text-white tracking-wider mb-3">
                    Anytime, Anywhere ready to watch.
                </p>
                {
                    !email ? (
                        <div 
                            className="flex flex-col gap-3"
                        >
                            <input 
                                type="email" 
                                placeholder="Email"
                                ref={emailRef}
                                className="focus:outline-none px-2 py-3 w-[100%] bg-[#203A43] rounded-md text-white text-sm"
                            />
                            <button 
                                onClick={startRegisterHandler}
                                className="w-[100%] px-2 py-3 tracking-wider bg-[#e63946] text-white font-semibold rounded-md"
                            >
                                Watch Now...
                            </button>
                        </div>
                    ) : (
                        <form 
                            className="flex flex-col gap-3"
                        >
                            <input 
                                type="username" 
                                placeholder="Username"
                                ref={usernameRef}
                                className="focus:outline-none px-2 py-3 w-[100%] bg-[#203A43] rounded-md text-white text-sm"
                            />
                            <input 
                                type="password" 
                                placeholder="Password"
                                ref={passwordRef}
                                className="focus:outline-none px-2 py-3 w-[100%] bg-[#203A43] rounded-md text-white text-sm"
                            />
                            <button 
                                onClick={finishRegisterHandler}
                                className="w-[100%] px-2 py-3 tracking-wider bg-[#e63946] text-white font-semibold rounded-md"
                            >
                                Sign Up
                            </button>
                            <p className="text-sm sm:text-base text-white font-light">
                                If you are new, click here to <span className="font-bold cursor-pointer">Sign Up</span>
                            </p>
                            <p className="text-xs sm:text-sm font-light text-white">
                                This page is protected by Google reCAPTCHA to ensure you're not a bot. <br /> Learn more.
                            </p>
                        </form>
                    )
                }
            </div>
        </section>
    )
};

export default Signup;