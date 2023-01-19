import { IInfoCardAge } from './interfaces';
import {  ContainerCard } from './styled';

export function InfoCardAge({middleAges, percentage} : IInfoCardAge) {
  return (
    <>
      <ContainerCard>
        <p data-testid="middleAges">Média de idade: <span>{middleAges} {middleAges > 1 ? 'anos' : 'ano'} </span></p>
        <p data-testid="percentage">percentual acima dos <br/> 21 anos: <span>{percentage}%</span></p>
      </ContainerCard>
    </>

  );
}
