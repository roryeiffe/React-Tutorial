import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../css/nameItem.module.css"

// This component is used to display the name item:
export default class NameItem extends Component {
    render() {
        const name = this.props.name;
        return (
            <div>
                <h1>Name Item</h1>
            </div>
        );
    }
}