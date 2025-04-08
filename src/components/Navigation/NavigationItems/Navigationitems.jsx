import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/about'>About</NavigationItem>
        <NavigationItem link='/portfolio'>Portfolio</NavigationItem>
        <NavigationItem link='/contact'>Contact Me</NavigationItem>
    </ul>
);

export default NavigationItems;