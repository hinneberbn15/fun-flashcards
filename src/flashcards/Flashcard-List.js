import React, { Component } from 'react';
import Flashcard from './Flashcard';

export default class FlashCardList extends Component {
  render() {
    return (
      <div className="row modal2">
        <div className="columns medium-7 medium-centered">
          <Flashcard />
        </div>
      </div>
    );
  }
}
