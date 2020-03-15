import React, { Component } from 'react';
import LoginForm from './LoginForm';

export class LoginPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <LoginForm />
                </div>
            </div>
        );
    }
}

export default LoginPage;
