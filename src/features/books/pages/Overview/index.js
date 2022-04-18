import React from 'react';
import Page from 'components/Page';
import Book from 'components/Book';
import Sorter from 'components/Sorter';

import { useBookActions, useSortedBooks } from '../../hooks';
import { BooksStatus, useStatus, useSavedBooks } from '../../state';
import { useOverview } from './useOverview';
import { Shelf } from './styles';

export const PAGE_TITLE = 'Discover New Books';

export default function Overview() {
  const {
    lists,
    view,
    sortBy,
    setSortBy,
    selected,
    handleListChange,
  } = useOverview();
  const status = useStatus();
  const savedBooks = useSavedBooks();
  const sortedBooks = useSortedBooks(sortBy);
  const { saveBookFromList, removeBook } = useBookActions();
  return (
    <Page
      pageTitle={PAGE_TITLE}
      filters={[
        <select onChange={handleListChange} value={selected} key="lists">
          {lists.map(list => (
            <option key={list.list_name_encoded} value={list.list_name_encoded}>
              {list.display_name}
            </option>
          ))}
        </select>,
        <Sorter onChange={setSortBy} value={sortBy} key="sorter" />,
      ]}
    >
      {status === BooksStatus.SUCCESS && (
        <Shelf>
          {sortedBooks.map(book => (
            <Book
              view={view}
              book={book}
              key={book.id}
              onSave={saveBookFromList}
              onRemove={removeBook}
              saved={savedBooks.some(({ id }) => id === book.id)}
            />
          ))}
        </Shelf>
      )}
    </Page>
  );
}
