import { getBooks, getLists } from '../api';

describe('api', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterAll(() => {
    global.fetch.mockClear();
  });

  it('should get books correctly', async () => {
    const spyFetch = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: () => ({
        results: {
          books: [{}],
        },
      }),
    });
    const books = await getBooks('hardcover-fiction');
    expect(spyFetch).toHaveBeenCalled();
    expect(books.length).toBeGreaterThan(0);
  });

  it('should get lists correctly', async () => {
    const spyFetch = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: () => ({
        results: [{}],
      }),
    });
    const lists = await getLists();
    expect(spyFetch).toHaveBeenCalled();
    expect(lists.length).toBeGreaterThan(0);
  });
});
