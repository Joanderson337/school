import { render } from '@testing-library/react';
import { InfoCard } from '.';

describe('InfoCard', () => {

  it('should show a city if there is one', () => {
    const { getByTestId } = render(<InfoCard data-testid="city" city='Madri'  theAmount={0}/>);

    expect(getByTestId('city').textContent).toBe('Cidade: Madri');
  });


  it('should show student if qauntity is equal to 1', () => {
    const { getByTestId } = render(<InfoCard data-testid="theAmount" city='Madri'  theAmount={1}/>);

    expect(getByTestId('theAmount').textContent).toBe('Quantidade de aluno: 1');
  });


  it('should show the students if the quantity equals 2', () => {
    const { getByTestId } = render(<InfoCard data-testid="theAmount" city='Madri'  theAmount={2}/>);

    expect(getByTestId('theAmount').textContent).toBe('Quantidade de alunos: 2');
  });
});
