import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from './Backdrop/Backdrop.js';
class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show) 
    }
    componentWillUpdate() {
        console.log('[Modal.js] componentWillUpdate')
    }
    render() {
        return (
            <React.Fragment>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0px)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
                >
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }

}

export default Modal;