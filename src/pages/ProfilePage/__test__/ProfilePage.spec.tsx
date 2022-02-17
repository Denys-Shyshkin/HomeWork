import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ProfilePage from '../ProfilePage';

describe('<ProfilePage />', () => {
  let renderProfilePage: () => RenderResult;

  beforeEach(() => {
    renderProfilePage = () => {
      return render(
        <MemoryRouter>
          <ProfilePage />
        </MemoryRouter>
      );
    };
  });

  test('renders Component', () => {
    const { getByRole } = renderProfilePage();

    expect(getByRole('progressbar')).toBeInTheDocument();
  });
});
