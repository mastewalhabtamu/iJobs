import React from "react";
import "../css/bootstrap.min.css";
// import "../css/owl.carousel.min.css";
import "../css/magnific-popup.css";
import "../css/font-awesome.min.css";
import "../css/theme-default.css";
import "../css/themify-icons.css";
import "../css/nice-select.css";
import "../css/flaticon.css";
import "../css/animate.css";
import "../css/slicknav.css";
import "../css/style.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/iJobs.png";

const Header = () => {
    return (
        <header>
            <div className="header-area">
                {/* <div className="header-top black-bg d-none d-md-block">
                    <div className="container">
                        <div className="row" style={{ alignItems: "center" }}>
                            <div className="col-xl-6 col-md-6 col-lg-6">
                                <div className="header-contact">
                                    <a href="#">
                                        <i className="fa fa-phone"></i> +880 256 356
                                        256
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-envelope"></i>{" "}
                                        support24@durg.com
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-lg-6">
                                <div className="header-top-menu">
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="blog.html">
                                                    News & media
                                                </a>
                                            </li>
                                            <li>
                                                <a href="review.html">Review</a>
                                            </li>
                                            <li>
                                                <a href="faq.html">FAQ</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div id="sticky-header" className="main-header-area white-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo-img">
                                    <Link to="/">
                                        <img
                                            src={logo}
                                            alt="Logo"
                                            style={{ maxWidth: "70%" }}
                                        />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div
                                    className="main-menu d-none d-lg-block"
                                    style={{ height: "100%" }}
                                >
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <Link className="active" to="/">
                                                    Home
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/register">
                                                    Hire freelancers
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/register">
                                                    Become Freelancer
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/contact">
                                                    Contact
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4">
                                <div
                                    className="quote-area"
                                    style={{ justifyContent: "space-around" }}
                                >
                                    <div className="get-quote d-none d-lg-block">
                                        <Link
                                            to="/register"
                                            className="boxed-btn"
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                    <div className="get-quote d-none d-lg-block">
                                        <Link to="/login" className="boxed-btn">
                                            Log in
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
