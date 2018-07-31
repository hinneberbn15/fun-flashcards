import React, { Component } from 'react';
import MainHeader from './headers/Main-Header';
import CategoryHeader from './headers/Category-Header';
import FlashcardList from './flashcards/Flashcard-List';
import CssBaseline from '@material-ui/core/CssBaseline'

export default class App extends Component {
  render() {
    return (
      <div className="app-root">
          <CssBaseline />
          <MainHeader />
          <CategoryHeader />
          <FlashcardList />
      </div>
    );
  }
}
