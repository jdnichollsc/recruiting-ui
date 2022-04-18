import { formatBook } from '../mapper';

describe('mapper', () => {
  it('should format book correctly', () => {
    const mockBook = {
      primary_isbn13: '1',
      book_image: 'test',
    };
    const formattedBook = formatBook(mockBook);
    expect(formattedBook.id).toEqual(mockBook.primary_isbn13);
    expect(formattedBook.image_url).toEqual(mockBook.book_image);
  });
});
