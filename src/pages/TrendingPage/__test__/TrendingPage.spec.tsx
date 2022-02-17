import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import TrendingPage from '../TrendingPage';
import { POSTS_PER_PAGE } from '../../../constants';

describe('<TrendingPage />', () => {
  let renderTrendingPage: () => RenderResult;

  beforeEach(() => {
    renderTrendingPage = () => {
      return render(
        <MemoryRouter>
          <TrendingPage />
        </MemoryRouter>
      );
    };
  });

  test('renders Component', () => {
    const { getAllByRole } = renderTrendingPage();

    expect(getAllByRole('article').length).toEqual(POSTS_PER_PAGE);
  });
});
