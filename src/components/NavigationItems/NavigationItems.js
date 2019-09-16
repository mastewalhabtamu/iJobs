import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Home</NavigationItem>
            <NavigationItem link="/">Spices</NavigationItem>
            <NavigationItem link="/">Fruits</NavigationItem>
            <NavigationItem link="/">Vegetables</NavigationItem>
            <NavigationItem link="/">Cereals</NavigationItem>
            <NavigationItem link="/">Meat</NavigationItem>
        </ul>
    )

}
export default navigationItems