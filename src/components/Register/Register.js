import React, {Fragment, Component} from 'react';
import './register.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css/'
import Header from '../Header/Header'
import Form from '../Forms/Form'
import Footer from '../Footer/Footer'
import {Link} from 'react-router-dom'
import config from '../../base'


class Register extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }


    handleSignup = (event) => {

        event.preventDefault()
        const email = this.state.email;
        const password = this.state.password;
        try {
            config.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(
                    this.props.history.push('/')
                )
        } catch (err) {
            console.log(err)
        }
        console.log(email, password)

    }


    render() {
        return (
            <Fragment>
                <Header/>
                <Form/>
                <div class="main">

                    <section className="signup">
                        <div className="container" style={{width: '60%'}}>
                            <div className="signup-content">
                                <form method="POST"
                                      className="signup-form">
                                    <h2 className="form-title">Create account</h2>
                                    <div className="form-group">
                                        <input type="text" className="form-input"
                                               value={(event) => this.setState({name: event.target.value})} id="name"
                                               placeholder="* Your Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-input"
                                               value={(event) => this.setState({email: event.target.value})} id="email"
                                               placeholder="* Your Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-input"
                                               value={(event) => this.setState({password: event.target.value})} required
                                               id="password"
                                               placeholder="* Password"/>
                                        <span toggle="#password"
                                              className="zmdi zmdi-eye field-icon toggle-password"></span>
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term"
                                               className="agree-term"/>
                                        <label for="agree-term" className="label-agree-term"><span><span></span></span>I
                                            agree all statements in <Link to="#" className="term-service">Terms of
                                                service</Link></label>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" onClick={this.handleSignup} name="submit" id="submit"
                                               className="form-submit"
                                               value="Sign up"/>
                                    </div>
                                </form>
                                <p className="loginhere">
                                    Have already an account ? <Link to="/login" className="loginhere-link">Login
                                    here</Link>
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