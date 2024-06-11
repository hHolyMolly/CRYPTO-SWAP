import React from 'react';
import Router from '@configs/Router';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from './store';

function App() {
  const dispatch = useAppDispatch();

  const { search } = useLocation();
  const { telegramUserId } = queryString.parse(search);

  React.useEffect(() => {
    if (telegramUserId) {
    } else {
    }
  }, []);

  return <Router />;
}

export default App;
