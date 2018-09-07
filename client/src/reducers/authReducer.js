import { FETCH_USER } from '../actions/types';


// first argument is ur state
// second will be the action
export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default: 
            return state;
    }
}