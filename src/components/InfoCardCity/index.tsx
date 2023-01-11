import { ICard } from './interfaces';
import {  ContainerCard } from './styled';

export function InfoCard({ city, theAmount} : ICard) {
  return (
    <>
      <ContainerCard>
        <p>Cidade: <span>{city}</span></p>
        <p>Quantidade de {theAmount >= 2 ? 'alunos' : 'aluno'}: <span>{theAmount}</span></p>
      </ContainerCard>
    </>
  );
}
