import React, { Component } from 'react';
import classes from './Logout.module.css';
import * as actions from '../../../store/actions';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class Logout extends Component {
    state = {
    }

    componentDidMount() {
        this.props.onLogout();
    }

    render() {
        return (
            <Redirect to="/" />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}
export default connect(null, mapDispatchToProps)(Logout);