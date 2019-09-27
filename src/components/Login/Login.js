import React, {Fragment, Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css/'
import Header from '../Header'
import Footer from '../Footer'
import {Link} from 'react-router-dom'
import './login.css'


function Login(props) {
    const [phone, setPhone] = React.useState('');


    function handleLogin() {

    }

    return (
        <Fragment>
            <Header/>
            <div class="main">

                <section className="signup"
                         style={{backgroundImage: "url('../dot.jpg')", backgroundSize: 'cover', backgroundRepeat: 'round'}}>
                    <div className="container" style={{width: '60%'}}>
                        <div className="signup-content" style={{background: 'transparent'}}>
                            <form method="POST" id="signup-form" onSubmit={handleLogin}
                                  className="signup-form">
                                <h2 className="form-title">Login</h2>
                                <div className="form-group">
                                    <input type="number" className="form-input" maxlength="15"
                                           value={phone} onChange={(event)=>setPhone(event.value)}
                                           minlength="10" id="email" placeholder="* Phone Number"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" id="submit"
                                           className="boxed-btn" style={{width: '100%'}}
                                           value="Login"/>
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

export default Login