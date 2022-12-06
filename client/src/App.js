import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { AuthContext } from './context/auth-context';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {

    const { user } = useContext(AuthContext);

    // const user = false

    return (
        <Routes>
           <Route path="/" element={user ? <Home /> : <Navigate to="/signup" />} />
           <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
           <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            {
                user && (
                    <>
                        <Route path="/movies" element={<Home type="movie" />} />
                        <Route path="/series" element={<Home type="series" />} />
                        <Route path="/detail" element={<Detail />} />
                    </>
                )
            }
        </Routes>
    )
};

export default App;