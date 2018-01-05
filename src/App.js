import React, { Component } from 'react';
import { repeat } from 'ramda';
import './scss/index.scss';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="columns small-3">Hello</div>
        <div className="columns small-3">Hello</div>
        <div className="columns small-3">Hello</div>
        <div className="columns small-3">Hello</div>
        {repeat(<div className="columns small-3">Hello</div>, 4)}
      </div>
    );
  }
}

// function getFullGrid() {
//   return ;
// }
