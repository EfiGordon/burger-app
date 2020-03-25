import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {
    // This could be a functional component. 

    // componentWillUpdate() {
    //     console.log('[OrderSummary.js] componentWillUpdate')
    // }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey) => {
        return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey} </span>: {this.props.ingredients[igKey]}</li>)
        });

        return (
            <React.Fragment>
            <h3>Your Order</h3>
            <p>awesome burger with: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContiniued}>CONTINUE</Button>
        </React.Fragment>
        );
    }
}

export default OrderSummary;