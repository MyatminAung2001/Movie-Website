import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth-context';
import { LoginApi } from '../context/auth-api';

import LoginImg from '../images/LoginBg.jpg';

const Login = () => {

    const { dispatch } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailInputHandler = (event) => {
        setEmail(event.target.value)
    };

    const passwordInputHandler = (event) => {
        setPassword(event.target.value)
    };

    const LoginHandler = (event) => {
        event.preventDefault();
        LoginApi({ email, password }, dispatch)
    };

    return (
        <section className="relative w-[100%] h-[100vh]">
            <img 
                src={LoginImg}
                alt="" 
                className="w-[100%] h-[100%] object-cover"
            />
            <div className="w-[280px] sm:w-[380px] px-3 py-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <header className="text-left text-white text-3xl font-bold mb-5 tracking-wider">
                    Login
                </header>
                <form 
                    action="" 
                    className="flex flex-col gap-3"
                >
                    <input 
                        type="email" 
                        placeholder="Email"
                        onChange={emailInputHandler}
                        className="focus:outline-none px-2 py-3 w-[100%] bg-[#203A43] rounded-md text-white text-sm"
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange={passwordInputHandler}
                        className="focus:outline-none px-2 py-3 w-[100%] bg-[#203A43] rounded-md text-white text-sm"
                    />
                    <button 
                        onClick={LoginHandler}
                        className="w-[100%] px-2 py-3 tracking-wider bg-[#e63946] text-white font-semibold rounded-md"
                    >
                        Login
                    </button>
                    <p className="text-sm sm:text-base text-white font-light">
                        If you are new, click here to {" "} 
                        <Link to='/signup'>
                            <span className="font-bold underline">Sign Up</span>
                        </Link>
                    </p>
                    <p className="text-xs sm:text-sm font-light text-white">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <br /> Learn more.
                    </p>
                </form>
            </div>
        </section>
    )
};

export default Login;