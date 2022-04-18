export const formatBook = book => ({
  ...book,
  id: book.primary_isbn13,
  image_url: book.book_image,
});
