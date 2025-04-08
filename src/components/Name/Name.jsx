import React from 'react';
import classes from './Name.module.css';

const name = (props) =>(
    <div className={classes.Name} style={{height: props.height}}>
        <h4>Jacques Agbenu</h4>
    </div>
)

export default name;