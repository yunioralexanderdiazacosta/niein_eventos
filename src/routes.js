import React from 'react';
import {  Route } from 'react-router';

import App from './Components/App';
import LoginPage from './Components/login/LoginPage';

export default(
    <Route path="/" component={LoginPage}>
        <Route path="/login" component={LoginPage} />
    </Route>
)