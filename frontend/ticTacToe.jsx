import React from 'react';

import Board from './board';

export default class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isXTurn: true, numTurns: 0 };
    this.changeTurns = this.changeTurns.bind(this);
  }

  changeTurns() {
    this.setState({
      isXTurn: !this.state.isXTurn,
      numTurns: this.state.numTurns + 1
     });
  }

  render() {
    const { isXTurn, numTurns } = this.state;
    return(
      <main>
        <Board
          isXTurn={ isXTurn }
          numTurns={ numTurns }
          changeTurns={ this.changeTurns}
        />
      </main>
    );
  }
}
