import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';

export class NavigationBar extends Component {
    logout = (e) => {
        e.preventDefault();
        this.props.logout()
    }
    componentDidMount = () => {
        console.log("aqui esta", this.props)
    }

    render() {
        const { isAuthenticate } = this.props.auth


        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" className="navbar-brand">NIEN EVENTOS</Link>       
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                
                        <ul className="navbar-nav mr-auto">
                            {isAuthenticate ?
                            (<li className="nav-item">
                                <button className="nav-link" onClick={this.logout.bind(this)}>Cerrar Sesión
                                </button>
                            </li>)
                            :
                            (<li className="nav-item">
                                <Link to="/login" className="nav-link">Iniciar Sesión</Link>
                            </li>)
                            }
                        </ul>
                    
                </div>
            </nav>
        );
    }
}

NavigationBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logout})(NavigationBar);

