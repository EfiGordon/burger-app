import React from 'react';
import classes from './Logo.module.css';

import burgerLoogo from '../../assets/images/logo.png';
const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLoogo} alt="Burger Logo" style={{height: props.height}}/>
        </div>
    )    
}

export default Logo;