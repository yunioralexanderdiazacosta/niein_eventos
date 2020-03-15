import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

export class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            correo: '',
            clave: '',
            errors: {},
            isLoading: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true })
        this.props.login(this.state)
        .then(res => {
            console.log(res)
            this.setState({isLoading: false})
        })
        .catch(err => {
            console.log(err)
        })
    }

    onChange = (e) => {
        this.setState({  [e.target.name]: e.target.value })
    }

    render() {
        const { errors, correo, clave, isLoading } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h1>Iniciar Sesión</h1>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Correo</label>
                            <input className="form-control" type="text" name="correo" value={correo} onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label>Clave</label>
                            <input className="form-control" type="text" name="clave" value={clave} onChange={this.onChange} />
                        </div>

                        <div className="text-right">
                            <button className="btn btn-primary" type="submit" disabled={isLoading}>Entrar</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

LoginForm.protoTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginForm);
