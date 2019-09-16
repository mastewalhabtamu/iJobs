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
import br4 from '../../assets/images/img/brand/4.png'



const Brand = () => {
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default Brand