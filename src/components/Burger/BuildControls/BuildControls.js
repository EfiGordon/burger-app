import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    },
    {
        label: 'Meat',
        type: 'meat'
    },
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                removed = {() => {
                    props.ingredientRemoved(ctrl.type);
                }}
                added={() => {
                    return props.ingredientAdded(ctrl.type);
                }}
                key={ctrl.label} 
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}
                />
            ))}

            <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER</button>
        </div>
    );
}

export default buildControls;