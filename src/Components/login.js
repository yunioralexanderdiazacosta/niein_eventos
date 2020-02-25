import React from 'react';
import '../Assets/css/styles.css';
import '../Assets/fontawesome/css/all.min.css';
import '../Assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import logo from '../Assets/img/niein2.png';

function Login() {
return (
    <div className="login-page">
        <div classNameName="Login">
            <div className="login-box">
                <div classNameName="login-logo text-center mb-3">
                    <img src={logo} alt="logo"/>
                </div>
                {/* login-logo */}
                <div classNameName="card">
                    <div className="card-body login-card-body">
                    <p className="login-box-msg">Iniciar Sesión</p>

                    <form method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Correo Electrónico"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Contraseña"/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock text-danger"></span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember"/>
                                    <label for="remember">
                                        Recuerdame
                                    </label>
                                </div>
                            </div>
                            {/* /.col */}
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                            </div>
                            {/* /.col */}
                        </div>
                    </form>

                    <p className="mb-1">
                        <a href="forgot-password.html">Olvidé mi contraseña</a>
                    </p>
                    <p className="mb-0">
                        <a href="#" className="text-center">Register a new membership</a>
                    </p>
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>
            {/* /.login-box */}
        </div>
    </div>
    );
}
export default Login;
