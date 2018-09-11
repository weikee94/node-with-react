import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import 'materialize-css/dist/css/materialize.min.css';

// first arguments is reducers
// second is initial state
// third is middleware call
const store = createStore(reducers, {}, applyMiddleware(reduxThunk) )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);


console.log('Stripe key: ', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment: ', process.env.NODE_ENV);