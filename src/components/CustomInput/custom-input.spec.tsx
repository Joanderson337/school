import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Colors from '../../styles/theme';
import { CustomInput } from '.';

describe('Custom Input', () => {
  it('should render with error if hasError is true', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={true} />
    );

    const input = getByPlaceholderText('Lorem Ipsum');

    expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` });
  });

  it('should render without error if hasError is false', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    );

    const input = getByPlaceholderText('Lorem Ipsum');

    expect(input).toHaveStyle({ border: 'none' });
  });

  it('should change value when user types', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    );

    const input = getByPlaceholderText('Lorem Ipsum');

    userEvent.type(input, 'Hox');

    getByDisplayValue('Hox');
  });
});
