import { act, renderHook } from '@testing-library/react-hooks';
import * as router from '@reach/router';

import * as hooks from '../../../hooks/useBookActions';
import { useAddBook, ERRORS } from '../useAddBook';

describe('useAddBook hook', () => {
  let navigate;
  let addBook;
  beforeEach(() => {
    navigate = jest.fn();
    jest.spyOn(router, 'useNavigate').mockReturnValue(navigate);
    addBook = jest.fn();
    jest.spyOn(hooks, 'useBookActions').mockReturnValue({ addBook });
  });

  it('should handle change action', async () => {
    const { result } = renderHook(() => useAddBook());

    act(() => {
      result.current.handleChange({
        target: { name: 'title', value: 'test' },
      });
    });
    act(() => {
      result.current.handleChange({
        target: { name: 'author', value: 'test' },
      });
    });
    act(() => {
      result.current.handleChange({
        target: { name: 'image_url', value: 'test' },
      });
    });

    expect(result.current.values.author).toBe('test');
    expect(result.current.values.title).toBe('test');
    expect(result.current.values.image_url).toBe('test');
  });

  it('should handle submit action', async () => {
    const { result } = renderHook(() =>
      useAddBook({
        title: 'test',
        author: 'test',
        image_url: 'https://proyecto26.com/img/p26.png',
      })
    );

    act(() => {
      result.current.handleSubmit();
    });
    expect(addBook).toHaveBeenCalledWith(result.current.values);
    expect(navigate).toHaveBeenCalledWith('/saved');
  });

  it('should handle errors when submitting action', async () => {
    const { result } = renderHook(() =>
      useAddBook({
        title: 't',
        author: 'a',
        image_url: 'test',
      })
    );

    act(() => {
      result.current.handleSubmit();
    });

    expect(result.current.errors.title).toBe(ERRORS.TITLE);
    expect(result.current.errors.author).toBe(ERRORS.AUTHOR);
    expect(result.current.errors.image_url).toBe(ERRORS.IMAGE_URL);
  });
});
