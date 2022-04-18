import React, { useState } from 'react';
import { useNavigate, useLocation } from '@reach/router';
import { Button } from 'components/Buttons';
import Icon from 'components/Icon';
import Page from 'components/Page';
import Book from 'components/Book';
import Sorter from 'components/Sorter';

import { useBookActions, useSortedSavedBooks } from '../../hooks';
import { useSavedBooks } from '../../state';
import { Shelf } from './styles';

export const PAGE_TITLE = 'Your Saved Books';

export default function Bookshelf() {
  const navigate = useNavigate();
  const location = useLocation();
  const [, view] = location.search.match(/view=(grid|list)/) || [];
  const [sortBy, setSortBy] = useState('title');
  const sortedBooks = useSortedSavedBooks(sortBy);
  const savedBooks = useSavedBooks();
  const { addBook, removeBook } = useBookActions();

  return (
    <Page
      pageTitle={PAGE_TITLE}
      filters={[
        <Button onClick={() => navigate('/books/new')} key="add-new">
          <Icon icon="plus" /> Add new book
        </Button>,
        <Sorter onChange={setSortBy} value={sortBy} key="sorter" />,
      ]}
    >
      <Shelf>
        {sortedBooks.map(book => (
          <Book
            view={view}
            book={book}
            key={book.id}
            onSave={addBook}
            onRemove={removeBook}
            saved={savedBooks.some(({ id }) => id === book.id)}
          />
        ))}
      </Shelf>
    </Page>
  );
}
