import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';

export class NavBar extends Component {
    logout = (e) => {
        e.preventDefault();
        this.props.logout()
    }
    
    render() {
        return (
            <div className="menu-arriba">
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#!">NIEIN EVENTOS</a>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#!" onClick={this.logout.bind(this)}>Cerrar Sesión</a>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}

NavBar.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(null, {logout})(NavBar);

