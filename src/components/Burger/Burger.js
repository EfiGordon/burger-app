import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { withRouter } from 'react-router-dom'; //Although we can pass the history prop, here we use an Higer Order Component to extract the history prop.

const burger = (props) => {
    // The ingredients that passed by the BurgerBuilder is an object (props.ingredeints) therefore we  want to convert it to an array
    const transformedIngredientsKeys = Object.keys(props.ingredients); // ["salad", "cheese", ...]
    // console.log(transformedIngredientsKeys);
    // console.log(props.ingredients);
    let transformedIngredients = transformedIngredientsKeys.map(ingredientKey => {
        const sum = props.ingredients[ingredientKey];
        return [...Array(sum)].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        });
    })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    //console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default withRouter(burger);