import React, {Fragment, Component} from 'react';
import './register.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css/'
import Header from '../Header/Header'
import Form from '../Forms/Form'
import Footer from '../Footer/Footer'
import {Link} from'react-router-dom'


class Register extends Component {
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
                <Form/>
                <div class="main">

                    <section className="signup">
                        <div className="container">
                            <div className="signup-content">
                                <form method="POST" id="signup-form" className="signup-form">
                                    <h2 className="form-title">Create account</h2>
                                    <div className="form-group">
                                        <input type="text" className="form-input" name="name" id="name" placeholder="Your Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-input" name="email" id="email" placeholder="Your Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-input" name="re_password" id="re_password" placeholder="Your phone Number"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-input" name="password" id="password" placeholder="Password"/>
                                        <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repeat your password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                        <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="submit" id="submit" className="form-submit" value="Sign up"/>
                                    </div>
                                </form>
                                <p className="loginhere">
                                    Have already an account ? <Link to="/login" className="loginhere-link">Login here</Link>
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

export default Register