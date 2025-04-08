import React from 'react';
import classes from './Skill.module.css';

const Skill = (props) => {
    return(
        <article className={classes.Card}>
            <img src={props.image} alt={props.alt} />
            <p>{props.name}</p>
        </article>
    );
};

export default Skill;