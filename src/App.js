import React, { Component } from "react";
// CSS
import styles from "./assets/css/app.module.css";

// Components
import Names from "./assets/components/Names";
import AddName from "./assets/components/AddName";
import Header from "./assets/components/header";

export default class App extends Component {
  state = {
    players: [
      {
        name: "Rory",
        points: 0,
      },
      {
        name: "Jack",
        points: 0,
      },
      {
        name: "Zach",
        points: 0,
      },
    ],
  };

  // Delete name that you don't want to use by filtering out the names that
  // equals the name to be deleted:
  delName = (nameDel) => {
    this.setState({
      players: [
        ...this.state.players.filter((player) => player.name !== nameDel),
      ],
    });
  };

  // Add Name
  addName = (title) => {
    let found = false;
    var nameList = this.state.players;
    // Cannot add duplicates:
    for (var i = 0; i < nameList.length; i++) {
      if (title === nameList[i].name) found = true;
    }
    var newPlayer = {
      name: title,
      points: 0,
      answer: "new answer",
    };
    // Push new player
    if (!found && title !== "" && this.state.players.length < 8)
      nameList.push(newPlayer);
    this.setState({ names: nameList });
  };

  render() {
    return (
      <div className={styles.page}>
        <div className={styles.leftBlock}></div>
        <div className={styles.rightBlock}></div>
        <div className={styles.above}>
          <Header className={styles.header}>
            <p className={styles.header1}>Enter Player Names:</p>
            <p className={styles.header2}>(Tap to Delete)</p>
          </Header>
          <Names players={this.state.players} delName={this.delName} />
          <AddName addName={this.addName} />
        </div>
      </div>
    );
  }
}
