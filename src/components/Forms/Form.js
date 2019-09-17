import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'


const Form = () => {


    return (
        <Fragment>
            <div style={{marginLeft: '70%', marginTop: '-51.2px'}} className="col-xl-3 col-lg-3">
                <div className="quote-area">
                    <div className="get-quote d-none d-flex">
                        <Link to="/register" className="boxed-btn">Get Started</Link>
                    </div>
                </div>
            </div>

            <div style={{marginLeft: '84%', marginTop: '-51.2px'}} class="col-xl-3 col-lg-3">
                <div class="quote-area">
                    <div class="get-quote d-flex">
                        <Link to="/login" className="boxed-btn">Log in</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Form