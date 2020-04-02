import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        //console.log(this.props.ingredients);
        this.setState({loading: true});
        // alert('You continue');
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'EG',
                address: {
                    street: 'Menahem Begin',
                    zipCode: '5454',
                    country: 'Israel'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
        .then((response) => {
            this.setState({loading: false});
            //console.log(response);
            this.props.history.push('/');
        })
        .catch((error) => {
            this.setState({loading: false});
            console.log(error);
        })
    }

    render() {
        let form = (
                    <form>
                        <input type="text" className={classes.input} name="name" placeholder="Your Name"></input>
                        <input type="text" className={classes.input} name="email" placeholder="Your Email"></input>
                        <input type="text" className={classes.input} name="street" placeholder="Street"></input>
                        <input type="text" className={classes.input} name="postalCode" placeholder="Postal Code"></input>
                    </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
                <div className={classes.ContactData}>
                    <h4>Enter Your Contact Data</h4>
                    {form}
                    <Button btnType="Success" clicked={this.orderHandler}> ORDER </Button>
                </div>
        );
    }

}

export default ContactData;