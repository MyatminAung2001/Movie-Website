import React from 'react';
import { BsFacebook, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <section className="bg-[#0F2027] w-[100%] px-8 py-8 sm:flex sm:justify-evenly">
            <div className="mb-5">
                <header className="text-lg text-white text-center sm:text-left font-bold tracking-wide mb-3">
                    Moviedeck
                </header>
                <ul className="flex justify-between sm:flex-col sm:gap-y-2">
                    <li className="text-white text-sm cursor-pointer">
                        About
                    </li>
                    <li className="text-white text-sm cursor-pointer">
                        Contact
                    </li>
                    <li className="text-white text-sm cursor-pointer">
                        Account
                    </li>
                    <li className="text-white text-sm cursor-pointer">
                        Help Center
                    </li>
                </ul>
            </div>
            <div className="mb-5">
                <header className="text-lg text-center sm:text-left text-white font-bold tracking-wide mb-3">
                    Question?
                </header>
                <ul className="flex justify-between sm:flex-col sm:gap-y-2">
                    <li className="text-white text-sm cursor-pointer">
                        Call +10923425542
                    </li>
                    <li className="text-white text-sm cursor-pointer">
                        FAQ
                    </li>
                    <li className="text-white text-sm cursor-pointer">
                        Terms of Use
                    </li>
                    <li className="text-white text-sm cursor-pointer">
                        Privacy
                    </li>
                </ul>
            </div>
            <div className="mb-5">
                <header className="text-lg text-center sm:text-left text-white font-bold tracking-wide mb-3">
                    Resources
                </header>
                <ul className="flex justify-between sm:flex-col sm:gap-y-2">
                    <li className="text-white text-sm cursor-pointer">
                        Mongodb
                    </li>
                    <li className="text-white text-sm cursor-pointer">
                        Express
                    </li>
                    <li className="text-white text-sm cursor-pointer">
                        React
                    </li>
                    <li className="text-white text-sm cursor-pointer">
                        Nodejs
                    </li>
                </ul>
            </div>
            <div className="mb-5">
                <p className="text-center text-white mb-3">
                    This Moviedeck is built by <br /> <b>Myatmin Aung</b> 
                </p>
                <ul className="text-white flex justify-between items-center md:flex-col md:items-start md:gap-y-3">
                    <li className="flex items-center gap-2">
                        <a href="https://www.facebook.com/profile.php?id=100008542208276">
                            <BsFacebook size={30} />
                        </a>
                        Facebook Link
                    </li>
                    <li className="flex items-center gap-2">
                        <a href="https://github.com/MyatminAung2001">
                            <BsGithub size={30} />
                        </a>
                        Github Link
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Footer;