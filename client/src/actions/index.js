import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => 
    // dispatch the action after 
    // the req success
    async (dispatch) => {
       const res = await axios.get('/api/current_user'); 
       dispatch({ type: FETCH_USER, payload: res.data });
    }

export const handleToken = (token) => 
    async (dispatch) => {
        const res = await axios.post('/api/stripe', token);
        dispatch({
            type: FETCH_USER,
            payload: res.data
        })

    }


    // FETCH Example
    // async (dispatch) => {
    //     const res = await fetch('/api/current_user');
    //     const responseJson = await res.json();
    //     dispatch({ type: FETCH_USER, payload: responseJson });
    // } 

// export default fetchUser;
