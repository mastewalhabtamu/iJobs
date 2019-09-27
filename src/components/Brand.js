import React, {Component, Fragment} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/animate.css";
import "../css/magnific-popup.css";
import "../css/font-awesome.min.css";
import "../css/theme-default.css";
import "../css/nice-select.css";
import "../css/flaticon.css";
import "../css/slicknav.css";
import "../css/style.css";
import "../css/bootstrap.min.css";
import br4 from "../assets/images/img/brand/4.png";
import icog_logo from "../assets/images/icog logo.jpeg";
import iom_logo from "../assets/images/iom logo.png";
import github_logo from "../assets/images/github logo.png";
import "./custom.css";

const Brand = () => {
    return (
        <Fragment>
            <div className="slider-area">
                <div className="">
                    <div className="single-slider bg-img-1"></div>
                </div>
            </div>

            <div className="brand-area gray-bg" style={{background: '#fff'}}>
                <div className="container">
                    <div className="row" style={{alignItems: 'center', textAlign: 'center'}}>
                        <div className="col-sm-3">
                            <img src={br4} alt="" className="brand_logo"/>
                        </div>
                        <div className="col-sm-3">
                            <img src={icog_logo} alt="" className="brand_logo"/>
                        </div>
                        <div className="col-sm-3">
                            <img src={iom_logo} alt="" className="brand_logo"/>
                        </div>
                        <div className="col-sm-3">
                            <img src={github_logo} alt="" className="brand_logo"/>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Brand;
