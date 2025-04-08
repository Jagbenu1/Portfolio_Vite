import React from 'react';
import { NavLink } from 'react-router';
import classes from './NavigationItem.module.css';

const navigationItem = (props) =>(
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            exact = "true"
            className={(navData) => (navData.isActive ? classes.active : 'none')}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;