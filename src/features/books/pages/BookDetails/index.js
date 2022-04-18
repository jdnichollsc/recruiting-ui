import React from 'react';
import PropTypes from 'prop-types';
import Page from 'components/Page';
import Icon from 'components/Icon';

import { useBookActions } from '../../hooks';
import { useBookDetails } from './useBookDetails';
import { StyledPage, Cover, StyledSaveButton, Author, Detail } from './styles';

export default function BookDetails({ bookId }) {
  const { saveBookFromList, removeBook } = useBookActions();
  const { book, isSaved } = useBookDetails(bookId);
  if (!book) {
    return (
      <Page>
        <h2>Book not found!</h2>
      </Page>
    );
  }

  return (
    <StyledPage>
      <div>
        <Cover>
          {book.image_url ? (
            <img src={book.image_url} alt={book.title} />
          ) : (
            <Icon icon="book-open" />
          )}
        </Cover>
        <StyledSaveButton
          onSave={() => saveBookFromList(book)}
          onRemove={() => removeBook(book)}
          saved={isSaved}
        />
      </div>
      <h1>{book.title.toLowerCase()}</h1>
      <Author>{book.author}</Author>
      <h2>Description</h2>
      <p>{book.description}</p>
      <h2>Details</h2>
      {book.publisher && (
        <Detail>
          <strong>Publisher:&nbsp;</strong>
          {book.publisher}
        </Detail>
      )}
      {book.primary_isbn13 && (
        <Detail>
          <strong>ISBN13:&nbsp;</strong>
          {book.primary_isbn13}
        </Detail>
      )}
      {book.rank && (
        <Detail>
          <strong>Best Sellers Rank:&nbsp;</strong>
          {`${book.rank}`}
        </Detail>
      )}
      {book.weeks_on_list && (
        <Detail>
          <strong>Weeks on Best Sellers List:&nbsp;</strong>
          {book.weeks_on_list}
        </Detail>
      )}
    </StyledPage>
  );
}

BookDetails.propTypes = {
  bookId: PropTypes.string,
};
