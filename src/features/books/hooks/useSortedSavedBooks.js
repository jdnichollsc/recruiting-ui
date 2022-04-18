import { useMemo } from 'react';

import { useSavedBooks } from '../state';

export function useSortedSavedBooks(sortBy) {
  const books = useSavedBooks();
  const sortedBooks = useMemo(
    () =>
      [...books].sort(({ [sortBy]: a }, { [sortBy]: b }) =>
        a < b ? -1 : a > b ? 1 : 0
      ),
    [books, sortBy]
  );
  return sortedBooks;
}
