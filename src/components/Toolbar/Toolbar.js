import React,{Fragment} from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {

    return (
        <Fragment>
        <header className={classes.Toolbar}>
            <div className={classes.Text}>Menu</div>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
        </Fragment>
    )

}

export default Toolbar