import React, {Fragment, Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css/'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import './login.css'


class Login extends Component {

    handleLogin = () => {

    }

    render() {
        return (
            <Fragment>
                <Header/>
                <div class="main">

                    <section className="signup">
                        <div className="container" style={{width: '60%'}}>
                            <div className="signup-content">
                                <form method="POST" id="signup-form" onSubmit={this.handleLogin}
                                      className="signup-form">
                                    <h2 className="form-title">Login</h2>
                                    <div className="form-group">
                                        <input type="number" className="form-input" name="email" maxlength="15"
                                               minlength="10" id="email" placeholder="* Phone Number"/>

                                        <div className="form-group">
                                            <input type="submit" name="submit" id="submit" className="form-submit"
                                                   value="Login"/>
                                        </div>
                                    </div>
                                </form>
                                <p className="loginhere">
                                    Can't access your phone number? <Link to="/login" className="loginhere-link">Click
                                    here to
                                    fix</Link>
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
                <Footer/>
            </Fragment>
        );
    }
}

export default Login