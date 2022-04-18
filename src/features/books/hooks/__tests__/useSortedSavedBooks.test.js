import { renderHook } from '@testing-library/react-hooks';

import * as state from '../../state/selectors';
import { useSortedSavedBooks } from '../useSortedSavedBooks';

describe('useSortedSavedBooks hook', () => {
  it('should sort saved books correctly', () => {
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
    const spyUseSavedBooks = jest
      .spyOn(state, 'useSavedBooks')
      .mockImplementationOnce(() => mockBooks);
    const { result } = renderHook(() => useSortedSavedBooks('title'));

    expect(spyUseSavedBooks).toHaveBeenCalled();
    expect(result.current).toEqual(mockBooks.reverse());
  });
});
