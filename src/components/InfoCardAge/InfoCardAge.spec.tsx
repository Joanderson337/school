import { render } from '@testing-library/react';
import { InfoCardAge } from '.';

describe('InfoCardAge', () => {

  it('should show a percentage if there is one', () => {
    const { getByTestId } = render(<InfoCardAge data-testid="percentage" middleAges={1} percentage={20} />);

    expect(getByTestId('percentage').textContent).toBe('percentual acima dos  21 anos: 20%');
  });

  it('should show years if age is equal to or greater than 2', () => {
    const { getByTestId } = render(<InfoCardAge data-testid="middleAges" middleAges={2} percentage={2} />);

    expect(getByTestId('middleAges').textContent).toBe('Média de idade: 2 anos ');
  });

  it('should show year if age is less than 2', () => {
    const { getByTestId } = render(<InfoCardAge data-testid="middleAges" middleAges={1} percentage={2} />);

    expect(getByTestId('middleAges').textContent).toBe('Média de idade: 1 ano ');
  });
});
