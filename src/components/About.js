import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/animate.css'
import '../css/magnific-popup.css'
import '../css/font-awesome.min.css'
import '../css/theme-default.css'
import '../css/nice-select.css'
import '../css/flaticon.css'
import '../css/slicknav.css'
import '../css/style.css'
import {NavLink} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import '../css/bootstrap.min.css'
import masti from '../assets/images/masti.jpeg'
import image from '../assets/images/image.jpg'
import br4 from '../assets/images/img/brand/4.png'


const About = () => {

    return (
        <Fragment>
            <Header/>

            <div style={{marginTop: '5%'}} className="slider-area">
                <div className="slider-active owl-carousel">
                    <div className="single-slider bg-img-1">
                    </div>
                </div>
            </div>
            <div className="brand-area gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="brand-active owl-carousel">
                                <div className="single-brand">
                                    <img src={br4} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="team-area section-padding gray-bg">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="section-title text-center mb-65">
                            <h3>Meet with the teams</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-8">
                            <div class="single-team">
                                <div class="team-thumb">
                                    <img src={image} alt=""/>
                                    <div class="team-hover">
                                        <div class="team-link">
                                            <ul>
                                                <li><NavLink to="#"> <i class="fa fa-facebook"></i> </NavLink></li>
                                                <li><NavLink to="#"> <i class="fa fa-twitter"></i> </NavLink></li>
                                                <li><NavLink to="#"> <i class="fa fa-linkedin"></i> </NavLink></li>
                                                <li><NavLink to="#"> <i class="fa fa-telegram"></i> </NavLink></li>
                                                <li><NavLink to="#"> <i class="fa fa-whatsapp"></i> </NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-info text-center">
                                    <h3>Bethel Hall</h3>
                                    <p>Project Manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-8">
                            <div class="single-team">
                                <div class="team-thumb">
                                    <img src={masti} alt=""/>
                                    <div class="team-hover">
                                        <div class="team-link">
                                            <ul>
                                                <li><NavLink to="#"> <i class="fa fa-facebook"></i> </NavLink></li>
                                                <li><NavLink to="#"> <i class="fa fa-twitter"></i> </NavLink></li>
                                                <li><NavLink to="#"> <i class="fa fa-linkedin"></i> </NavLink></li>
                                                <li><NavLink to="#"> <i class="fa fa-telegram"></i> </NavLink></li>
                                                <li><NavLink to="#"> <i class="fa fa-whatsapp"></i> </NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-info text-center">
                                    <h3>Mastewal Degaga</h3>
                                    <p>Lead Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default About