import { useDispatch } from 'react-redux';
import store from './store';

export const useAppDispatch = () => useDispatch();

export { store };
