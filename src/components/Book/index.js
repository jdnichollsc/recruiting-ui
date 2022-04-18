import React from 'react';
import PropTypes from 'prop-types';

import { SaveButton } from '../Buttons';
import {
  Wrapper,
  Cover,
  Anchor,
  Details,
  Title,
  Author,
  Description,
} from './styles';

export default function Book({ book, onSave, onRemove, saved, view }) {
  const bookUrl = `/books/${book.id}`;
  return (
    <Wrapper key={book.id} view={view}>
      <Cover>
        <Anchor data-testid="image-link" to={bookUrl}>
          <img src={book.image_url} alt={book.title} />
        </Anchor>
      </Cover>
      <Details>
        <Title>
          <Anchor data-testid="title-link" to={bookUrl}>
            {book.title.toLowerCase()}
          </Anchor>
        </Title>
        <Author>{book.author}</Author>
        {view === 'list' && <Description>{book.description}</Description>}
        <SaveButton
          onSave={() => onSave(book)}
          onRemove={() => onRemove(book)}
          saved={saved}
        />
      </Details>
    </Wrapper>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
  saved: PropTypes.bool,
  onSave: PropTypes.func,
  onRemove: PropTypes.func,
  view: PropTypes.string,
};
