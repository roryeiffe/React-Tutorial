import React, { Component } from "react";
import styles from "./assets/css/app.module.css"
import Header from "./assets/components/header"
import Names from "./assets/components/Names"
import AddName from "./assets/components/AddName"

export default class App extends Component {
  state = {
    players: [
      {
        name: "Rory",
        points: 0
      },
      {
        name: "Ace",
        points:0
      },
      {name: "Alexia",
      points: 0}
    ]
  }
  delName = (nameDel) => {
    this.setState({players:[...this.state.players.filter((player) =>
      player.name !== nameDel)]})
  }
  addName = (newName) => {
    let found = false;
    let nameList = this.state.players;
    for (var i = 0; i < nameList.length; i ++) {
      if (newName === nameList[i].name) found = true;
    }
    var newPlayer = {
      name: newName,
      points: 0
    };
    if (!found && newName !== "") nameList.push(newPlayer)
    this.setState({players:nameList});
  }
  render() {
    return (
      <div className = {styles.page} >
        <div className = {styles.leftBlock}></div>
        <div className = {styles.rightBlock}></div>
        <div className = {styles.above}>
          <Header className = {styles.header}>
            <p className = {styles.header1}>Enter Player Names:</p>
            <p className = {styles.header2}>(Tap to Delete)</p>
          </Header>
          <Names players = {this.state.players} delName = {this.delName}/>
          <AddName addName = {this.addName} />
        </div>

      </div>
    );
  }
}

