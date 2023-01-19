import { render } from '@testing-library/react';
import Colors from '../../styles/theme';
import {  ErrorMessage } from '.';

describe('Input Error Message', () => {
  it('should show message with error color', () => {
    const { getByText } = render(
      <ErrorMessage>Lorem Ipsum</ ErrorMessage>
    );

    const message = getByText('Lorem Ipsum');

    expect(message).toHaveStyle({ color: Colors.error });
  });
});
