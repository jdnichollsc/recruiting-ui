import { act, renderHook } from '@testing-library/react-hooks';

import * as store from 'store';
import * as actions from '../../state/actions';
import { useBookActions } from '../useBookActions';

describe('useBookActions hook', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
    jest.spyOn(store, 'useAppDispatch').mockReturnValue(dispatch);
  });

  it('should handle addBook action', () => {
    const mockBook = {
      id: '1',
      title: 'test',
    };
    const spyBookAdded = jest.spyOn(actions, 'bookAdded');
    const { result } = renderHook(() => useBookActions());

    act(() => {
      result.current.addBook(mockBook);
    });

    expect(spyBookAdded).toHaveBeenCalledWith(mockBook);
    expect(dispatch).toHaveBeenCalledWith(spyBookAdded(mockBook));
  });

  it('should handle saveBookFromList action', () => {
    const mockBook = {
      id: '1',
      title: 'test',
    };
    const spyBookSavedFromList = jest.spyOn(actions, 'bookSavedFromList');
    const { result } = renderHook(() => useBookActions());

    act(() => {
      result.current.saveBookFromList(mockBook);
    });

    expect(spyBookSavedFromList).toHaveBeenCalledWith(mockBook);
    expect(dispatch).toHaveBeenCalledWith(spyBookSavedFromList(mockBook));
  });

  it('should handle removeBook action', () => {
    const mockBook = {
      id: '1',
    };
    const spyBookRemoved = jest.spyOn(actions, 'bookRemoved');
    const { result } = renderHook(() => useBookActions());

    act(() => {
      result.current.removeBook(mockBook);
    });

    expect(spyBookRemoved).toHaveBeenCalledWith(mockBook.id);
    expect(dispatch).toHaveBeenCalledWith(spyBookRemoved(mockBook.id));
  });
});
