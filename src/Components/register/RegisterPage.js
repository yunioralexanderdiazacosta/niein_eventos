import React, { Component } from 'react';
import RegisterForm from './RegisterForm';


export class RegisterPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <RegisterForm />
                </div>
            </div>
        );
    }
}

export default RegisterPage;
