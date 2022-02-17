import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import FeedPostsList from '../FeedPostsList';
import { trendingFeedMock } from '../../../domain/mockedData/trendingFeedMock';

describe('<FeedPostsList />', () => {
  window.scrollTo = jest.fn();
  let renderFeedPostsList: () => RenderResult;
  const testName = trendingFeedMock[0].authorMeta.nickName;

  beforeEach(() => {
    renderFeedPostsList = () => {
      return render(
        <MemoryRouter>
          <FeedPostsList allPosts={trendingFeedMock} />
        </MemoryRouter>
      );
    };
  });

  test('renders Component', () => {
    const { getByText } = renderFeedPostsList();
    const userName = getByText(testName);

    expect(userName).toBeInTheDocument();
  });

  test('pagination works properly', () => {
    const { getByText, getByLabelText } = renderFeedPostsList();

    expect(getByLabelText('page 1')).toBeInTheDocument();
    expect(getByLabelText('Go to page 2')).toBeInTheDocument();

    fireEvent.click(getByText('2'));

    expect(getByLabelText('Go to page 1')).toBeInTheDocument();
    expect(getByLabelText('page 2')).toBeInTheDocument();
  });
});
