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
                                    <div className="form-group">
                                        <input type="text" className="form-input" name="name" id="name" placeholder="Your Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-input" name="email" maxlength="15" minlength="10" id="email" placeholder="Phone Number"/>
                                    </div>


                                </form>
                                <p className="loginhere">
                                    Forgot Phone number?<Link to="/login" className="loginhere-link">Click here to fix</Link>
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