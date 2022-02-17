import React, { ReactElement } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import UserCard from '../UserCard';
import { userInfoMock } from '../../../domain/mockedData/userInfoMock';

describe('<UserCard />', () => {
  let renderUserCard: (a: ReactElement) => RenderResult;
  const testName = userInfoMock.user.nickname;

  beforeEach(() => {
    renderUserCard = (component: ReactElement) => {
      return render(<MemoryRouter>{component}</MemoryRouter>);
    };
  });

  test('renders Component', () => {
    const { getByText } = renderUserCard(
      <UserCard profile={userInfoMock} isLoading={false} />
    );
    const userName = getByText(testName);

    expect(userName).toBeInTheDocument();
  });

  test('renders spinner during loading', () => {
    const { container } = renderUserCard(
      <UserCard profile={userInfoMock} isLoading={true} />
    );
    const spinner = container.querySelector('circle');

    expect(spinner).toBeInTheDocument();
  });

  test('renders error when no user data is available', () => {
    const { getByRole } = renderUserCard(
      <UserCard profile={undefined} isLoading={false} />
    );
    const error = getByRole('alert');

    expect(error).toBeInTheDocument();
  });
});
