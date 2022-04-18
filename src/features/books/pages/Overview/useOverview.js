import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation, useParams } from '@reach/router';
import { useAppDispatch } from 'store';

import { fetchGetBooks } from '../../state';
import { getLists } from '../../api';

export function useOverview() {
  const navigate = useNavigate();
  const location = useLocation();
  const { listName } = useParams();
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(listName || 'hardcover-fiction');
  const [lists, setLists] = useState([]);
  const [sortBy, setSortBy] = useState('title');

  const [, view] = useMemo(
    () => location.search.match(/view=(grid|list)/) || [],
    [location.search]
  );

  useEffect(() => {
    getLists().then(newLists => setLists(newLists));
  }, []);

  useEffect(() => {
    const promise = dispatch(fetchGetBooks(selected));
    return () => promise.abort();
  }, [dispatch, selected]);

  const handleListChange = e => {
    const { value } = e.target;
    setSelected(value);
    navigate(`/${value}`, { replace: true });
  };

  return {
    lists,
    view,
    sortBy,
    setSortBy,
    selected,
    handleListChange,
  };
}
