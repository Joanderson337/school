import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '.';

describe('Header', () => {

  it('should have an exit button', () => {
    render(
      <BrowserRouter>
        <Header data-testid="close" />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText('Sair'));
    expect(screen.getByTestId('close')).toBeInTheDocument();
  });

  it('should there should be a club button', () => {
    render(
      <BrowserRouter>
        <Header data-testid="club" />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText('Clubes dos alunos'));
    expect(screen.getByTestId('club')).toBeInTheDocument();
  });

  it('should must have a home button', () => {
    render(
      <BrowserRouter>
        <Header data-testid="home" />
      </BrowserRouter>
    );

    userEvent.click(screen.getByText('Escola estrela do saber'));
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
