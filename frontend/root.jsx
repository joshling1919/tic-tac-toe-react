import React from 'react';
import ReactDOM from 'react-dom';

import TicTacToe from './ticTacToe';


class Root extends React.Component {
  render() {
    return(
      <TicTacToe />
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
