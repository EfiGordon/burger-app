import React from 'react';
import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigiationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
            {
                props.isAuthenticated
                    ? <NavigationItem link="/logout">Logout</NavigationItem>
                    : <NavigationItem link="/auth">Sign In</NavigationItem>
            }
        </ul>
    );
}

export default navigiationItems;