import { IInfoCardAge } from './interfaces';
import {  ContainerCard } from './styled';

export function InfoCardAge({middleAges, percentage} : IInfoCardAge) {
  return (
    <>
      <ContainerCard>
        <p>Média de idade: <span>{middleAges} {middleAges > 1 ? 'anos' : 'ano'} </span></p>
        <p>percentual acima dos <br/> 21 anos: <span>{percentage}%</span></p>
      </ContainerCard>
    </>

  );
}
