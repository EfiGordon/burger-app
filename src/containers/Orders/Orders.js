import React, { Component } from 'react';
import classes from './Orders.module.css';
import Order from '../../components/Order/Order';

class Orders extends Component {
    state = {
    }

    render() {

        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}
export default Orders;