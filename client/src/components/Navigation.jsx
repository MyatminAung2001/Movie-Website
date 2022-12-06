import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight, BiMenuAltLeft } from 'react-icons/bi';
import { motion } from 'framer-motion';

import myProfile from '../images/myProfile.jpg';
import { AuthContext } from '../context/auth-context';
import { logout } from '../context/auth-action';

const Navigation = () => {

    const [menu, setMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    const { dispatch } = useContext(AuthContext);

    const toggleMenuHandler = () => {
        setMenu(!menu);
    };

    const toggleMobileMenuHandler = () => {
        setMobileMenu(!mobileMenu);
    };

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    const logoutHandler = () => {
        dispatch(logout())
    };

    const scrollCss = "w-[100%] px-6 py-2 md:px-14 flex justify-between items-center fixed z-[1000]";
    const scrollActiveCss = "w-[100%] px-6 py-2 md:px-14 flex justify-between items-center fixed z-[1000] bg-[#203A43] shadow-lg"

    return (
        <section className={isScrolled ? scrollActiveCss : scrollCss}>
            <div className="">
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMobileMenuHandler}
                    className="block sm:hidden"
                >
                    <BiMenuAltLeft size={30} color="#ffffff" />
                </motion.div>
                <ul className="hidden sm:flex sm:items-center sm:gap-10 cursor-pointer text-white">
                    <Link to="/">
                        <li className="py-1 px-2 border-b-2 border-transparent hover:border-b-[#e63946] transition-all duration-150">
                            Home
                        </li>
                    </Link>
                    <Link to="/movies">
                        <li className="py-1 px-2 border-b-2 border-transparent hover:border-b-[#e63946] transition-all duration-150">
                            Movies
                        </li>
                    </Link>
                    <Link to="/series">
                        <li className="py-1 px-2 border-b-2 border-transparent hover:border-b-[#e63946] transition-all duration-150">
                            Series
                        </li>
                    </Link>
                </ul>
                {
                    mobileMenu && (
                        <motion.div
                            initial={{opacity: 0, scale: 0.6}} 
                            animate={{opacity: 1, scale: 1}} 
                            exit={{opacity: 0, scale: 0.6}}
                            className="absolute left-2 top-[55px] bg-[#203A43] px-4 py-2"
                        >
                            <ul className="flex flex-col gap-3"> 
                            <Link to='/'>
                                <li className="text-white hover:text-[#00a6fb] transition-all duration-150 cursor-pointer">
                                    Home
                                </li>
                            </Link>
                            <Link to='/movies'>
                                <li className="text-white hover:text-[#00a6fb] transition-all duration-150 cursor-pointer">
                                    Movies
                                </li>
                            </Link>
                            <Link to='/series'>
                                <li className="text-white hover:text-[#00a6fb] transition-all duration-150 cursor-pointer">
                                    Series
                                </li>
                            </Link>
                            </ul>
                        </motion.div>
                    )
                }
            </div>
            <div className="flex items-center gap-2">
                <img 
                    src={myProfile}
                    alt="" 
                    className="w-[30px] sm:w-[40px] rounded-md"
                />
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMenuHandler}
                    className="cursor-pointer"
                >
                    <BiMenuAltRight size={30} color="#ffffff" />
                </motion.div>
                {
                    menu && (
                        <motion.div
                            initial={{opacity: 0, scale: 0.6}} 
                            animate={{opacity: 1, scale: 1}} 
                            exit={{opacity: 0, scale: 0.6}}
                            className="absolute right-2 top-[55px] bg-[#203A43] px-4 py-2"
                        >
                            <ul className="flex flex-col gap-3"> 
                                <li className="text-white hover:text-[#00a6fb] transition-all duration-150 cursor-pointer">
                                    Settings
                                </li>
                                <li 
                                    onClick={logoutHandler}
                                    className="text-white hover:text-[#00a6fb] transition-all duration-150 cursor-pointer"
                                >   
                                    Log Out
                                </li>
                            </ul>
                        </motion.div>
                    )
                }
            </div>
        </section>
    )
};

export default Navigation;