import React from 'react';
import Icon from 'components/Icon';

import { FormPage, StyledForm, ErrorMessage, Button, Cover } from './styles';
import { useAddBook } from './useAddBook';

export const PAGE_TITLE = 'Add New Book';

export default function AddBook() {
  const { errors, values, handleChange, handleSubmit } = useAddBook();
  return (
    <FormPage pageTitle={PAGE_TITLE}>
      <StyledForm>
        <input
          data-testid="title-input"
          name="title"
          placeholder="Book Title"
          value={values.title}
          onChange={handleChange}
          data-error={errors.title}
        />
        {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}

        <input
          data-testid="author-input"
          name="author"
          placeholder="Author Name"
          value={values.author}
          onChange={handleChange}
          data-error={errors.author}
        />
        {errors.author && <ErrorMessage>{errors.author}</ErrorMessage>}

        <textarea
          data-testid="description-textarea"
          name="description"
          placeholder="Book Description"
          rows="4"
          value={values.description}
          onChange={handleChange}
        />

        <input
          data-testid="image-input"
          name="image_url"
          placeholder="Cover Image URL"
          value={values.image_url}
          onChange={handleChange}
          data-error={errors.image_url}
        />
        {errors.image_url && <ErrorMessage>{errors.image_url}</ErrorMessage>}

        <Button type="button" onClick={handleSubmit}>
          Save
        </Button>
      </StyledForm>
      <Cover>
        {values.image_url ? (
          <img src={values.image_url} alt={values.title} />
        ) : (
          <Icon icon="book-open" />
        )}
      </Cover>
    </FormPage>
  );
}
