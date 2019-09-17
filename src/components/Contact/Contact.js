import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/animate.css'
import '../../css/magnific-popup.css'
import '../../css/font-awesome.min.css'
import '../../css/theme-default.css'
import '../../css/nice-select.css'
import '../../css/flaticon.css'
import '../../css/slicknav.css'
import '../../css/style.css'
import '../../css/bootstrap.min.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import icon1 from '../../assets/images/img/icon/1.png'
import icon2 from '../../assets/images/img/icon/2.png'
import icon3 from '../../assets/images/img/icon/3.png'
import {NavLink} from 'react-router-dom'


const Contact = () => {

    return (
        <Fragment>
            <Header/>
            <section>
                <div className="row">
                    <div className="col-8">
                        <h2 className="contact-title">Get in Touch</h2>
                    </div>
                    <div className="col-lg-8">
                        <form className="form-contact contact_form" action="contact_process.php" method="post"
                              id="contactForm"
                              novalidate="novalidate">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">

                                    <textarea className="form-control w-100" name="message" id="message" cols="30"
                                              rows="9"
                                              onfocus="this.placeholder = ''"
                                              onblur="this.placeholder = 'Enter Message'"
                                              placeholder=" Message">
                                    </textarea>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="name" id="name" type="text"
                                               onfocus="this.placeholder = ''"
                                               onblur="this.placeholder = 'Enter your name'"
                                               placeholder="Enter your name"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email"
                                               onfocus="this.placeholder = ''"
                                               onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control" name="subject" id="subject" type="text"
                                               onfocus="this.placeholder = ''"
                                               onblur="this.placeholder = 'Enter Subject'"
                                               placeholder="Enter Subject"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                                <h3>Addis Ababa, Ethiopia.</h3>
                                <p>Bole Road, Yeshi Building</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                            <div className="media-body">
                                <h3>+251991849517</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                                <h3>support@iJobs.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="addres-area black-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <div className="single-address text-center">
                                <div className="addres-icon">
                                    <img src={icon1} alt=""/>
                                </div>
                                <h3>Our Location</h3>
                                <p>Addis Ababa, Ethiopia <br/></p>
                                <NavLink class="underline-hover" to="#">Get Direction</NavLink>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-address text-center">
                                <div className="addres-icon">
                                    <img src={icon2} alt=""/>
                                </div>
                                <h3>Opening hour</h3>
                                <p>Mon-Fri (9.00-19.00) <br/>
                                    Sat-Sun <NavLink className="underline-hover" to="#">(Closed)</NavLink></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-address text-center">
                                <div className="addres-icon">
                                    <img src={icon3} alt=""/>
                                </div>
                                <h3>Drop a message</h3>
                                <p>support.iJobs@gmail.com <br/>
                                    +251991849517</p>
                                <NavLink className="underline-hover" to="#">Mail Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Contact