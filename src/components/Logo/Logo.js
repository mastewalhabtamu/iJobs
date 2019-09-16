import React from 'react'
import temenLogo from '../../assets/images/logo.png'
import classes from './Logo.module.css'

const Logo = (props) => {
    return (<div className={classes.Logo}>
        <img src={temenLogo}/>
    </div>)

}
export default Logo