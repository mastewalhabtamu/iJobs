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
import {Link} from 'react-router-dom'
import '../../css/bootstrap.min.css'
import logo from '../../assets/images/newLogo.png'



const Header =()=>{
    return(
        <header>
            <div className="header-area ">
                <div>
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </div>

                <div id="sticky-header" className="main-header-area white-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo-img">
                                    <Link to="/">
                                        <img src={logo} alt="Logo goes here"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10">
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><Link className="active" to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/service">Services</Link></li>
                                            <li><Link to="/project">Projects</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                            <li><Link to="/">Payment</Link></li>
                                            <li><Link to="/">Recent</Link></li>
                                            <li><Link to="/">Updated</Link></li>
                                            <li><Link to="/">Projects</Link></li>
                                            <li><Link to="/">Projects</Link></li>
                                            <li><Link to="/">Projects</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header