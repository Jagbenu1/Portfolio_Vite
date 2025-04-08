import React from 'react';
import classes from './Social.module.css';


const Social = (props) =>{
    return (
        <div className={classes.Social}>
            <a target="_blank" href="https://github.com/Jagbenu1" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a target="_blank" href="https://www.instagram.com/jacquesagbenu/" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a target="_blank" href="https://www.facebook.com/jacques.agbenu/" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/jacques-agbenu/" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
    );
};


export default Social;