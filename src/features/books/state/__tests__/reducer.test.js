import {
  bookAdded,
  bookSavedFromList,
  bookRemoved,
  booksLoaded,
} from '../actions';
import { booksSliceReducer, initialState } from '../reducer';

describe('The books reducer', () => {
  it('should load books', () => {
    const state = booksSliceReducer(initialState, {
      type: booksLoaded.type,
      payload: [{ id: '1' }, { id: '2' }],
    });

    expect(state).toEqual({
      ...initialState,
      books: [{ id: '1' }, { id: '2' }],
    });
  });

  it('should add a custom book', () => {
    const state = booksSliceReducer(initialState, {
      type: bookAdded.type,
      payload: { id: '1' },
    });

    expect(state).toEqual({
      ...initialState,
      saved: [{ id: '1' }],
    });
  });

  it('should save a book', () => {
    const state = booksSliceReducer(initialState, {
      type: bookSavedFromList.type,
      payload: { id: '1' },
    });

    expect(state).toEqual({
      ...initialState,
      saved: [{ id: '1' }],
    });
  });

  it('should remove a book', () => {
    const currentState = {
      ...initialState,
      saved: [{ id: '1' }, { id: '2' }],
    };
    const state = booksSliceReducer(currentState, {
      type: bookRemoved.type,
      payload: '1',
    });

    expect(state).toEqual({
      ...initialState,
      saved: [{ id: '2' }],
    });
  });
});
