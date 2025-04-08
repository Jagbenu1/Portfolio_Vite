import React from 'react';
import classes from './MobileClick.module.css';

const Mobileclick = (props) => (
    <div onClick={props.appear} className={classes.MobileClick}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default Mobileclick;
