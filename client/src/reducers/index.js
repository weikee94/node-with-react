// import auth reducer here
// combine it with a combined reducers call
// and export the combined file

import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    // the key we provide to this object is 
    // to represent the keys that exists inside
    // of our state object
    auth: authReducer
});
