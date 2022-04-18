export const STATE_KEY = 'state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE_KEY);
    return serializedState ? JSON.parse(serializedState) : {};
  } catch {
    return {};
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch {
    // ignore
  }
};
