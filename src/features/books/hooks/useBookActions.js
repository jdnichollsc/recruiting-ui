import { useAppDispatch } from 'store';

import { bookAdded, bookRemoved, bookSavedFromList } from '../state';

export function useBookActions() {
  const dispatch = useAppDispatch();
  const addBook = newBook => {
    dispatch(bookAdded(newBook));
  };
  const saveBookFromList = newBook => {
    dispatch(bookSavedFromList(newBook));
  };
  const removeBook = ({ id }) => {
    dispatch(bookRemoved(id));
  };

  return {
    addBook,
    saveBookFromList,
    removeBook,
  };
}
