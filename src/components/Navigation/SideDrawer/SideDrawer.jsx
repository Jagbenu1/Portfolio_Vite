import React from 'react';
import Name from '../../Name/Name';
import NavigationItems from '../NavigationItems/Navigationitems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxilliary from '../../../hoc/Auxilliary/Auxilliary';

const SideDrawer = (props) =>{
    let attachedClasses = [classes.SideDrawer, classes.Closed];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return(
        <Auxilliary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Name}>
                    <Name />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxilliary>
    );
}

export default SideDrawer;