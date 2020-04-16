import React, { Component } from 'react';
import classes from './Auth.module.css';
import { Input, Button } from '../../components/UI';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'mymail@example.com'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            },
        },
    }


    checkValidity(value, rules) {
        //console.log("fff:", (value.length >= rules.minLength));
        if (!rules) return true; // If there is no validation rules.

        let valid = true;
        if (rules.required) {
            valid = value.trim() !== '' && valid;
        }
        if (rules.minLength) {
            valid = (value.length >= rules.minLength) && valid;
        }

        return valid;
    }

    inputChangedHandler = (event, controlName) => {

        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true,
            }

        };

        this.setState({ controls: updatedControls })
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        const form = formElementsArray.map(formElement => {
            return (

                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => {
                        return this.inputChangedHandler(event, formElement.id)
                    }}
                />
            )
        })


        return (
            <div className={classes.Auth}>
                <form>
                    {form}
                    <Button btnType="Success"> Submit </Button>
                </form>
            </div>
        );
    }
}
export default Auth;