import React, {Fragment, Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css/'
import Header from '../Header/Header'
import Form from '../Forms/Form'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import './login.css'


class Login extends Component {
    state = {
        'fname': '',
        'lname': '',
        'email': 0,
        'phone': 0,
        postSuccess: false
    };

    handleSubmit = () => {
        const user = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            phone: this.state.phone
        }
        axios.post('https://gcelab-235621.firebaseio.com/user.json', user)
            .then(response => {
                this.setState({postSuccess: true})
            });
    }


    render() {
        return (
            <Fragment>
                <Header/>
                <div class="main">

                    <section className="signup">
                        <div className="container" style={{width:'60%'}}>
                            <div className="signup-content">
                                <form method="POST" id="signup-form" className="signup-form">
                                    <h2 className="form-title">Login</h2>
                                    <div className="form-group">
                                        <input type="number" className="form-input" name="email" maxlength="15"
                                               minlength="10" id="email" placeholder="Phone Number"/>

                                        <div className="form-group">
                                            <input type="submit" name="submit" id="submit" className="form-submit"
                                                   value="Login"/>
                                        </div>
                                    </div>
                                </form>
                                <p className="loginhere">
                                    Forgot Phone number? <Link to="/login" className="loginhere-link">Click here to
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