import { useMemo } from 'react';

import { useBooks, useSavedBooks } from '../../state';

export function useBookDetails(bookId) {
  const books = useBooks();
  const saved = useSavedBooks();
  const { book, isSaved } = useMemo(() => {
    const fullBook = books.find(b => b.id === bookId);
    const savedBook = saved.find(b => b.id === bookId);
    if (savedBook && fullBook) {
      return {
        book: { ...savedBook, ...fullBook },
        isSaved: true,
      };
    }
    return { book: fullBook || savedBook, isSaved: !!savedBook };
  }, [books, saved, bookId]);

  return { book, isSaved };
}
