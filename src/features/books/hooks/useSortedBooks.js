import { useMemo } from 'react';

import { useBooks } from '../state';

export function useSortedBooks(sortBy) {
  const books = useBooks();
  const sortedBooks = useMemo(
    () =>
      [...books].sort(({ [sortBy]: a }, { [sortBy]: b }) =>
        a < b ? -1 : a > b ? 1 : 0
      ),
    [books, sortBy]
  );
  return sortedBooks;
}
