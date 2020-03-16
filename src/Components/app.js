import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Login from './login/LoginPage';
import Home from './home/HomePage';
import Register from './register/RegisterPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//STYLES
import '../Assets/css/dashboard.css';

class App extends Component{


    render(){
        const { isAuthenticate } = this.props.auth
        const navbar = isAuthenticate ?  <NavBar/> : '';
        const sidebar = isAuthenticate ? <SideBar/> : '';
        const clases = isAuthenticate ? 'col-md-9 ml-sm-auto col-lg-10 px-4' : 'col-lg-12';

        return(
            <div className="App">
                {navbar}
                <div className="container-fluid">
                    <div className="row">
                        {sidebar}
                        <main role="main" className={clases}>
                            <Switch>
                                <Route path="/register" component={Register} />
                                <Route path="/home" exact component={Home} />
                                <Route path="/" component={Login} />
                            </Switch>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}
App.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {})(App);