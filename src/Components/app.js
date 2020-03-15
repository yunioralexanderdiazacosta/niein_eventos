import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Login from './login/LoginPage';
import Home from './home/HomePage';

function App(){
    return(
        <div className="container">
            <NavigationBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    )
}
export default App