import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfilePage from './ProfilePage';
import TrendingPage from './TrendingPage';
import MenuAppBar from '../components/MenuAppBar';
import { Pages, ErrorMessages } from '../constants';
import ErrorAlert from '../components/ErrorAlert';

const App = () => {
  return (
    <div>
      <header>
        <MenuAppBar />
      </header>
      <Routes>
        <Route path={Pages.Feed} element={<TrendingPage />} />
        <Route path={Pages.Profile} element={<ProfilePage />} />
        <Route path={Pages.User} element={<ProfilePage />} />
        <Route
          path="*"
          element={<ErrorAlert message={ErrorMessages.WrongPage} />}
        />
      </Routes>
    </div>
  );
};

export default App;
