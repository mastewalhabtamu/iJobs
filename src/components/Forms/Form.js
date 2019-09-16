import React, {Component, Fragment} from 'react'
import {Route, NavLink} from 'react-router-dom'
import Register from '../Register/Register'


class UserForm extends Component {


    registerHandler = () => {
        this.props.history.replace('/register/user-form')
    }

    loginHandler() {
        this.props.history.replace('/login/user-form-login')
    }

    render() {
        return (
            
            <Fragment>
                <div style={{marginLeft: '70%', marginTop: '-51.2px'}} className="col-xl-3 col-lg-3">
                    <div className="quote-area">
                        <div className="get-quote d-none d-flex">
                            <button onClick={this.registerHandler} className="boxed-btn" >Get Started</button>
                            <Route path={this.props.match.path + '/user-form'} component={Register}/>
                        </div>
                    </div>
                </div>

                <div style={{marginLeft: '84%', marginTop: '-51.2px'}} class="col-xl-3 col-lg-3">
                    <div class="quote-area">
                        <div class="get-quote d-flex">
                            <button onClick={this.loginHandler} className="boxed-btn">Log in</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserForm