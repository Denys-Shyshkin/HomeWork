import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MediaCard from '../MediaCard';
import { userFeedMock } from '../../../domain/mockedData/userFeedMock';

describe('<MediaCard />', () => {
  let renderMediaCard: () => RenderResult;
  const id = userFeedMock[0].video.id;
  const error = id;
  const videoURL = userFeedMock[0].video.playAddr;
  const setError = jest.fn();

  beforeEach(() => {
    renderMediaCard = () => {
      return render(
        <MemoryRouter>
          <MediaCard
            id={id}
            videoURL={videoURL}
            error={error}
            setError={setError}
          />
        </MemoryRouter>
      );
    };
  });

  test('renders Component with fallback src in case of an error', () => {
    const { container } = renderMediaCard();
    const fallbackImg = container.querySelector('img');

    expect(fallbackImg).toBeInTheDocument();
  });
});
