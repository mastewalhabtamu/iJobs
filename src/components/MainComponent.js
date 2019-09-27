import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/animate.css";
import "../css/magnific-popup.css";
import "../css/font-awesome.min.css";

import "../css/themify-icons.css";
import "../css/nice-select.css";
import "../css/flaticon.css";
import "../css/slicknav.css";
import "../css/style.css";
import "../css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Brand from "./Brand";
import Form from "./Form";
import mob from "../assets/images/mobile.PNG";
import web from "../assets/images/web.PNG";
import counsel from "../assets/images/counsel.PNG";
import business_icon from "../assets/images/img/icon/conunter-icon.png";
import team_icon from "../assets/images/img/icon/conunter-icon2.png";
import love_icon from "../assets/images/img/icon/conunter-icon3.png";
import "./custom.css";

class MainComponent extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {/* <Form /> */}
                <Brand />
                <div className="service-area" style={{ paddingBottom: 60, paddingTop: 60, background: '#f5f5f5' }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="section-title text-center mb-65">
                                <span>OUR SERVICES</span>
                                <h3>
                                    We provide all of your <br />
                                    solution
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-4">
                                <div className="single-service">
                                    <div className="service-thumb">
                                        <img src={web} alt="" />
                                    </div>
                                    <h3>Mobile Solutions</h3>
                                    <p>
                                        45% Freelancers find jobs online using
                                        their smartphones
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4">
                                <div className="single-service">
                                    <div className="service-thumb">
                                        <img src={mob} alt="" />
                                    </div>
                                    <h3>Web Solutions</h3>
                                    <p>Web App For at your conveniences</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4">
                                <div className="single-service">
                                    <div className="service-thumb">
                                        <img src={counsel} alt="" />
                                    </div>
                                    <h3>Business Counseling</h3>
                                    <p>
                                        Get Guidance and Counseling At No Cost
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- counter-start -->*/}
                <div className="counter-area gray-bg" style={{ background: '#fff' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-4">
                                <div className="single-counter items_center justify_center">
                                    <div className="icon">
                                        <img src={business_icon} alt="" />
                                    </div>
                                    <div className="counter-number">
                                        <h3><span className="counter">90</span><span>+</span></h3>
                                        <p>Business <span>Completed</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4">
                                <div className="single-counter items_center justify_center">
                                    <div className="icon">
                                        <img src={team_icon} alt="" />
                                    </div>
                                    <div className="counter-number">
                                        <h3><span className="counter">16</span><span>+</span></h3>
                                        <p><span>Dedicated team</span> Business</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4">
                                <div className="single-counter items_center justify_center">
                                    <div className="icon">
                                        <img src={love_icon} alt="" />
                                    </div>
                                    <div className="counter-number">
                                        <h3><span className="counter">350</span><span>+</span></h3>
                                        <p>Positive <span>review</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- counter-start -->*/}
                <Footer />
            </Fragment>
        );
    }
}

export default MainComponent;
