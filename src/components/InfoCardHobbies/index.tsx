
import { IInfoCardHobbies } from './interfaces';
import {  ContainerCard } from './styled';

export function InfoCardHobbies({hobbies} : IInfoCardHobbies) {
  return (
    <>
      <ContainerCard>
        <p>{hobbies}</p>
      </ContainerCard>
    </>

  );
}
