import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

export class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            correo: '',
            clave: '',
            datosIncorrectos: false,
            isLoading: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({ isLoading: true, datosIncorrectos: false })
        this.props.login(this.state)
        .then(res => {
            this.setState({isLoading: false})
            this.props.history.push('/home')
        })
        .catch(err => {
            if(err.response.status === 400){
                this.setState({ datosIncorrectos: true, isLoading: false})
            }
            else{
                console.log(err)
                this.setState({ isLoading: false})
            }
        })
    }

    onChange = (e) => {
        this.setState({  [e.target.name]: e.target.value })
    }

    render() {
        const { datosIncorrectos, correo, clave, isLoading } = this.state

        const mensajeError = (
            <div className="alert alert-danger" role="alert">
                Correo y/o contraseña incorrectos
            </div>
        )

        return (
            <form onSubmit={this.onSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h1>Iniciar Sesión</h1>
                    </div>
                    <div className="card-body">
                        {datosIncorrectos ? mensajeError : ''}

                        <div className="form-group">
                            <label>Correo</label>
                            <input className="form-control" type="text" name="correo" value={correo} onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label>Clave</label>
                            <input className="form-control" type="password" name="clave" value={clave} onChange={this.onChange} />
                        </div>

                        <div className="text-right">
                            <button className="btn btn-primary" type="submit" disabled={isLoading}>Entrar</button>
                        </div>


                        <p><Link to="/register">Registrarse</Link></p>
                    </div>
                </div>
            </form>
        );
    }
}

LoginForm.protoTypes = {
    login: PropTypes.func.isRequired
}

export default withRouter(connect(null, {login})(LoginForm));
