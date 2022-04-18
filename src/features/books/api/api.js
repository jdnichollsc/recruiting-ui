import { formatBook } from './mapper';

const API_KEY = process.env.REACT_APP_API_KEY || '';

export const getBooks = async (listName, signal = null) => {
  const response = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/${listName}.json?api-key=${API_KEY}`,
    {
      signal,
    }
  );
  const { results } = await response.json();
  const books = results.books.map(formatBook);
  return books;
};

export const getLists = async (signal = null) => {
  const response = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`,
    {
      signal,
    }
  );
  const { results } = await response.json();
  return results || [];
};
