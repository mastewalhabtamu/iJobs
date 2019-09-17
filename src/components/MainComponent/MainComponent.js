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
import Brand from '../Brand/Brand'
import Form from '../Forms/Form'
import mob from '../../assets/images/mobile.PNG'
import web from '../../assets/images/web.PNG'
import counsel from '../../assets/images/counsel.PNG'


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
                                    <h3>Mobile Solutions</h3>
                                    <p>45% Freelancers find jobs online using their smartphones</p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4">
                                <div class="single-service">
                                    <div class="service-thumb">
                                        <img src={mob} alt=""/>
                                    </div>
                                    <h3>Web Solutions</h3>
                                    <p>Web App For at your conveniences</p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-4">
                                <div class="single-service">
                                    <div class="service-thumb">
                                        <img src={counsel} alt=""/>
                                    </div>
                                    <h3>Business Counseling</h3>
                                    <p>Get Guidance and Counseling At No Cost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default MainComponent