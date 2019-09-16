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
import About from '../About/About'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Brand from '../Brand/Brand'
import Form from '../Forms/Form'
import Contact from '../Contact/Contact'
import {Route} from 'react-router'
import web from '../../assets/images/img/project/project-1.png'
import ios from '../../assets/images/img/project/project-2.png'
import android from '../../assets/images/img/project/project-3.png'


class MainComponent extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Form/>
                <Brand/>
                <div class="service-area">
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="section-title text-center mb-65">
                                <span>OUR SERVICES</span>
                                <h3>We provide all of your <br/>
                                    solution</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-4 col-md-4">
                                <div class="single-service">
                                    <div class="service-thumb">
                                        <img src={web} alt=""/>
                                    </div>
                                    <h3>Industrial construction</h3>
                                    <p>Waters make fish every without firmament saw had. Morning air subdue.</p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4">
                                <div class="single-service">
                                    <div class="service-thumb">
                                        <img src={android} alt=""/>
                                    </div>
                                    <h3>Mechanical engineering</h3>
                                    <p>Waters make fish every without firmament saw had. Morning air subdue.</p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4">
                                <div class="single-service">
                                    <div class="service-thumb">
                                        <img src={ios} alt=""/>
                                    </div>
                                    <h3>Bridge construction</h3>
                                    <p>Waters make fish every without firmament saw had. Morning air subdue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path="/" exact component={MainComponent}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/register" component={Form}/>
                <Route render={() => <h1>404 Page Not Found</h1>}/>

                <Footer/>
            </Fragment>
        )
    }
}


export default MainComponent