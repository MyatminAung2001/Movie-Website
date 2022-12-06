import axios from 'axios';

import { login, loginFailure, loginSuccess } from './auth-action';

export const LoginApi = async (user, dispatch) => {
    dispatch(login());
    try {
        const res = await axios.post('https://movie-deck.herokuapp.com/auth/login', user);
        dispatch(loginSuccess(res.data))
    } catch (error) {   
        dispatch(loginFailure())
    }
};