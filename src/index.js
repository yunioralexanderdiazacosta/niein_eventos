import React from 'react';
//import { Router } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
import { BrowserRouter } from 'react-router-dom';

import App from './Components/App';
import { render } from 'react-dom';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
)