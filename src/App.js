import React, { Component } from 'react';
import './scss/index.scss';
import MainHeader from './headers/Main-Header';
import CategoryHeader from './headers/Category-Header';
import FlashcardList from './flashcards/Flashcard-List';
import Modal from './Modal';

export default class App extends Component {
  render() {
    return (
      <div className="app-root">
        <MainHeader />
        <CategoryHeader />

        <Modal>
          <FlashcardList />
        </Modal>
      </div>
    );
  }
}
