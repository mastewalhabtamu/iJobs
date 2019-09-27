import React, {Fragment, Component} from 'react';
import './register.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css/'
import Header from '../Header'
import Form from '../Form'
import Footer from '../Footer'
import {Link} from 'react-router-dom'
import config from '../../base'
import logo from "../../assets/images/iJobs.png";


function Register(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSignup(event) {

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


    return (
        <Fragment>


            <div class="main">
                <div className="row" style={{background: '#f5f5f5'}}>
                    <div className="col-md-6 bg_africa">

                    </div>
                    <div className="col-md-6">
                        {/*<Header/>*/}
                        <section className="signup">
                            <div className="container col-md-10">
                                <div className="signup-content" style={{background: '#f5f5f5'}}>
                                    <form method="POST"
                                          className="signup-form">
                                        <div style={{textAlign: 'center'}}>
                                            <Link to="/">
                                                <img src={logo} alt="logo"/>
                                            </Link>
                                        </div>
                                        <h2 className="form-title">Join Millions of Top Talents</h2>
                                        <div className="form-group">
                                            <input type="text" className="form-input" style={{background: '#fff'}}
                                                   value={name}
                                                   onChange={(event) => setName(event.value)}
                                                   id="name"
                                                   placeholder="* Your Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-input" style={{background: '#fff'}}
                                                   value={email}
                                                   onChange={(event) => setEmail(event.value)}
                                                   id="email"
                                                   placeholder="* Your Email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-input" style={{background: '#fff'}}
                                                   value={password}
                                                   onChange={(event) => setPassword(event.value)}
                                                   required
                                                   id="password"
                                                   placeholder="* Password"/>
                                            <span toggle="#password"
                                                  className="zmdi zmdi-eye field-icon toggle-password"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="agree-term"
                                                   className="label-agree-term">
                                                <span style={{fontSize: 14, paddingRight: 8}}>&#10004;</span>
                                                I agree all statements in <Link to="#" className="term-service">Terms
                                                of
                                                service</Link></label>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" onClick={handleSignup} name="submit"
                                                   id="submit"
                                                   className="boxed-btn"
                                                   style={{width: '100%'}}
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
                </div>
            </div>
            {/*<Footer/>*/}
        </Fragment>
    );

}

export default Register