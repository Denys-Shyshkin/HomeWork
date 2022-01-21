import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import UserPostList from '../UserPostList';
import { userFeedMock } from '../../../domain/mockedData/userFeedMock';
import { POSTS_PER_PAGE } from '../../../constants';

describe('<UserPostList />', () => {
  window.scrollTo = jest.fn();
  let renderUserPostList: (a: boolean) => RenderResult;
  const playCount = userFeedMock[0].stats.playCount;

  beforeEach(() => {
    renderUserPostList = (isLoading: boolean) => {
      return render(
        <MemoryRouter>
          <UserPostList allPosts={userFeedMock} isLoading={isLoading} />
        </MemoryRouter>
      );
    };
  });

  test('renders Component', () => {
    const { getByText } = renderUserPostList(false);

    expect(getByText(playCount)).toBeInTheDocument();
  });

  test('renders skeleton when loading', () => {
    const { container } = renderUserPostList(true);
    const span = container.querySelectorAll('span');

    expect(span.length).toEqual(POSTS_PER_PAGE);
  });
});
