import React from 'react';
import classes from './Navbar.module.css';
import Name from '../../Name/Name';
import NavigationItems from '../NavigationItems/Navigationitems';
import MobileClick from './MobileClick/MobileClick';

const Navbar = (props) => (
    <header className={classes.Navbar}>
        <MobileClick appear={props.disappear} />
        <div className={classes.Name}>
            <Name />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default Navbar;
