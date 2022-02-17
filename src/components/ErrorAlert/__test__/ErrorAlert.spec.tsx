import React, { ReactElement } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ErrorAlert from '../ErrorAlert';
import { Pages, ErrorMessages } from '../../../constants';

describe('<ErrorAlert />', () => {
  let renderErrorAlert: (a: ReactElement) => RenderResult;
  const history = createMemoryHistory();

  beforeEach(() => {
    renderErrorAlert = (component: ReactElement) => {
      return render(
        <Router location={history.location} navigator={history}>
          {component}
        </Router>
      );
    };
  });

  test('goes to Feed page when alert is clicked', () => {
    const message = ErrorMessages.WrongPage;
    const { getByText } = renderErrorAlert(<ErrorAlert message={message} />);

    fireEvent.click(getByText(message));

    expect(history.location.pathname).toBe(Pages.Feed);
  });

  test('displays unknown error text when there is no error message', () => {
    const { getByText } = renderErrorAlert(<ErrorAlert message={undefined} />);

    expect(getByText(ErrorMessages.UnknownError)).toBeInTheDocument();
  });
});
