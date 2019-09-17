import React from 'react'
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
import {Link} from 'react-router-dom'
import jobs from '../../assets/images/iJobs.png'

const Footer = () => {

    return (
        <footer class="footer-area ">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-sm-6 col-md-3 col-xl-4">
                        <div class="single-footer-widget footer_1">
                            <Link to="#"> <img src={jobs} alt=""/></Link>
                            <p>Waters make fish every without firmament saw had. Morning air subdue very one.
                                Whales grass
                                is fish whales winged.</p>
                            <div class="social-links">
                                <ul>
                                    <li><Link to="#"> <i class="fa fa-facebook"></i> </Link></li>
                                    <li><Link to="#"> <i class="fa fa-twitter"></i> </Link></li>
                                    <li><Link to="#"> <i class="fa fa-linkedin"></i> </Link></li>
                                    <li><Link to="#"> <i class="fa fa-telegram"></i> </Link></li>
                                    <li><Link to="#"> <i class="fa fa-whatsapp"></i> </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-2 col-xl-2">
                        <div class="single-footer-widget">
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
                    <div class="col-sm-6 col-md-3 col-xl-3">
                        <div class="single-footer-widget">
                            <h4>Solutions</h4>
                            <ul>
                                <li><Link to="#">Technical problems</Link></li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-xl-3">
                        <div class="single-footer-widget footer_icon">
                            <h4>Branch office</h4>
                            <div class="office-location">
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
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="copyright_part_text text-center">
                            <p class="footer-text m-0">
                                {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                                {/*Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>*/}
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