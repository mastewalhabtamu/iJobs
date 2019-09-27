import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/animate.css'
import '../css/magnific-popup.css'
import '../css/font-awesome.min.css'
import '../css/theme-default.css'
import '../css/nice-select.css'
import '../css/flaticon.css'
import '../css/slicknav.css'
import '../css/style.css'
import '../css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import jobs from '../assets/images/iJobs.png'

const Footer = () => {

    return (
        <footer className="footer-area ">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-sm-6 col-md-3 col-xl-4">
                        <div className="single-footer-widget footer_1" style={{textAlign: 'center'}}>
                            <Link to="#"> <img src={jobs} alt=""/></Link>
                            <p>Dont shrink your dreams! It does not matter how slowly you go as long as you do not stop. Confucius!</p>
                            <div className="social-links">
                                <ul>
                                    <li><Link to="#"> <i className="fa fa-facebook"></i> </Link></li>
                                    <li><Link to="#"> <i className="fa fa-twitter"></i> </Link></li>
                                    <li><Link to="#"> <i className="fa fa-linkedin"></i> </Link></li>
                                    <li><Link to="#"> <i className="fa fa-telegram"></i> </Link></li>
                                    <li><Link to="#"> <i className="fa fa-whatsapp"></i> </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-2 col-xl-2">
                        <div className="single-footer-widget">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="#">About</Link></li>
                                <li><Link to="#">Media</Link></li>
                                <li><Link to="#">Carrier</Link></li>
                                <li><Link to="#">Testimonials</Link></li>
                                <li><Link to="#">Stability</Link></li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xl-3">
                        <div className="single-footer-widget">
                            <h4>Solutions</h4>
                            <ul>
                                <li><Link to="#">Technical problems</Link></li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-xl-3">
                        <div className="single-footer-widget footer_icon">
                            <h4>Branch office</h4>
                            <div className="office-location">
                                <ul>
                                    <li>
                                        <strong>Addis Ababa - Ethiopia</strong>
                                        <p> Bole road, Yeshi Building 10th Floor,Addis Ababa, <br/>
                                        </p>
                                    </li>
                                    <li><Link to="#"> <i className="fa fa-mobile"></i> +251991849517</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="copyright_part_text text-center" style={{marginTop: 0}}>
                            <p className="footer-text m-0">
                                Copyright &copy;2019 All rights reserved | iJobs Freelancing
                                {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                                {/*Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>*/}
                                {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>*/}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer