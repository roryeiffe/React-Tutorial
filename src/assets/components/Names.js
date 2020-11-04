import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameItem from "./NameItem"

// This component is the list of players. For each player, this object displays
// the name and, when clicked, deletes the name:
export default class Names extends Component {
    render() {
        return this.props.players.map((player) => (
            <NameItem name = {player.name} key = {player.name + "_"} delName = {this.props.delName}/>
        ))
    }
}

Names.propTypes = {
    players: PropTypes.array.isRequired,
    delName: PropTypes.func.isRequired
}