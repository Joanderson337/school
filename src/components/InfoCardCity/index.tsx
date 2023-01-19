import { ICard } from './interfaces';
import {  ContainerCard } from './styled';

export function InfoCard({ city, theAmount} : ICard) {
  return (
    <>
      <ContainerCard>
        <p data-testid="city">Cidade: <span>{city}</span></p>
        <p data-testid="theAmount">Quantidade de {theAmount >= 2 ? 'alunos' : 'aluno'}: <span>{theAmount}</span></p>
      </ContainerCard>
    </>
  );
}
