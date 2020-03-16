import React, { Component } from 'react';
import {connect}  from 'react-redux';
import { userAdd } from '../../actions/usersActions';
import { withRouter } from "react-router-dom";

export class RegisterForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            correo: '',
            clave: '',
            userExist: false,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit (e){
        e.preventDefault();
        this.setState({ userExist: false })

        this.props.userAdd(this.state).then(res => {
            this.props.history.push('/login');
        }).catch(err => {
            if(err.response.status === 400)
            {
                this.setState({ userExist: true })
            }
            else
            {
                console.log(err)
            }
        });
    }

    render() {
        const  {userExist} = this.state

        const mensajeError = (
            <div className="alert alert-danger" role="alert">
                El correo electrónico ya se encuentra registrado
            </div>
        )
        
        return (
            <div className="card">
                <div className="card-header">
                    <h1>Registro de Usuario</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        {userExist ? mensajeError : ''}

                        <div className="form-group">
                            <label htmlFor="correo">Correo</label>
                            <input id="correo" 
                            className="form-control" 
                            type="text" 
                            name="correo" 
                            value={this.state.correo}
                            onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="clave">Clave</label>
                            <input id="clave" 
                            className="form-control" 
                            type="password" 
                            name="clave" 
                            value={this.state.clave}
                            onChange={this.onChange} />
                        </div>

                        <div className="text-right">
                        <button type="submit" className="btn btn-primary">
                            Registrarse
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, {userAdd})(RegisterForm));
