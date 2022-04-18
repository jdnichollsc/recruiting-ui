import {
  booksLoaded,
  bookAdded,
  bookRemoved,
  bookSavedFromList,
} from '../actions';

describe('actions', () => {
  it('booksLoaded action should be defined', () => {
    expect(booksLoaded).toBeDefined();
    expect(booksLoaded.type).toBe('booksLoaded');
  });
  it('bookAdded action should be defined', () => {
    expect(bookAdded).toBeDefined();
    expect(bookAdded.type).toBe('bookAdded');
  });
  it('bookRemoved action should be defined', () => {
    expect(bookRemoved).toBeDefined();
    expect(bookRemoved.type).toBe('bookRemoved');
  });
  it('bookSavedFromList action should be defined', () => {
    expect(bookSavedFromList).toBeDefined();
    expect(bookSavedFromList.type).toBe('bookSavedFromList');
  });
});
