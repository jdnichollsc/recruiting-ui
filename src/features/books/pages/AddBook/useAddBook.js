import { useState } from 'react';
import { useNavigate } from '@reach/router';
import { v4 as uuidv4 } from 'uuid';

import { useBookActions } from '../../hooks';

export const initialState = {
  title: '',
  author: '',
  image_url: '',
  description: '',
};

export const ERRORS = {
  TITLE: 'Please provide a title.',
  AUTHOR: 'Please provide an author.',
  IMAGE_URL: 'Please provide a cover image.',
};

export function useAddBook(book = initialState) {
  const navigate = useNavigate();
  const { addBook } = useBookActions();

  const [values, setValues] = useState(() => ({
    ...book,
    id: uuidv4(),
  }));
  const [errors, setErrors] = useState({});
  const handleChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const validationErrors = {};
    if (values.title.trim().length < 2) {
      validationErrors.title = ERRORS.TITLE;
    }
    if (values.author.trim().length < 2) {
      validationErrors.author = ERRORS.AUTHOR;
    }
    if (
      !/^(http(s?):)([\s\w./|-])*\.+(?:jpg|gif|png)+$/.test(values.image_url)
    ) {
      validationErrors.image_url = ERRORS.IMAGE_URL;
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }
    addBook(values);
    navigate('/saved');
    return true;
  };

  return {
    errors,
    values,
    handleChange,
    handleSubmit,
  };
}
