import React from 'react';
import { Router } from '@reach/router';
import Banner from 'components/Banner';
import {
  BookshelfPage,
  BookDetailsPage,
  AddBookPage,
  OverviewPage,
} from 'features/books';

import './App.css';

export function App() {
  return (
    <>
      <Banner />
      <Router>
        <OverviewPage path="/*listName" />
        <BookDetailsPage path="books/:bookId" />

        <BookshelfPage path="saved" />
        <BookDetailsPage path="saved/:bookId" />

        <AddBookPage path="books/new" />
      </Router>
    </>
  );
}

export default App;
