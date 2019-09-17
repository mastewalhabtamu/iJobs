import React from 'react';
import './App.css';
import Main from './components/MainComponent/MainComponent'
import {BrowserRouter} from 'react-router-dom'
import About from './components/About/About'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

import Contact from './components/Contact/Contact'
import {Route, Switch} from 'react-router-dom'


function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/project" component={Main}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route render={() => <h1>404 Page Not Found</h1>}/>
                </Switch>

            </div>
        </BrowserRouter>
    )
}

export default App;
