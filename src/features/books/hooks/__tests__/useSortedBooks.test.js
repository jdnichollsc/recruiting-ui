import { renderHook } from '@testing-library/react-hooks';

import * as state from '../../state/selectors';
import { useSortedBooks } from '../useSortedBooks';

describe('useSortedBooks hook', () => {
  it('should sort books correctly', () => {
    const mockBooks = [
      {
        id: '2',
        title: 'test2',
      },
      {
        id: '1',
        title: 'test1',
      },
    ];
    const spyUseBooks = jest
      .spyOn(state, 'useBooks')
      .mockImplementationOnce(() => mockBooks);
    const { result } = renderHook(() => useSortedBooks('title'));

    expect(spyUseBooks).toHaveBeenCalled();
    expect(result.current).toEqual(mockBooks.reverse());
  });
});
