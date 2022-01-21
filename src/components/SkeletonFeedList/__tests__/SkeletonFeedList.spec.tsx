import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SkeletonFeedList from '../SkeletonFeedList';
import { POSTS_PER_PAGE } from '../../../constants';

describe('<SkeletonFeedList />', () => {
  let renderSkeletonFeedList: () => RenderResult;

  beforeEach(() => {
    renderSkeletonFeedList = () => {
      return render(
        <MemoryRouter>
          <SkeletonFeedList />
        </MemoryRouter>
      );
    };
  });

  test('renders Component', () => {
    const { getAllByRole } = renderSkeletonFeedList();

    expect(getAllByRole('article').length).toEqual(POSTS_PER_PAGE);
  });
});
