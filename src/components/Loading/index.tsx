import RingLoader from 'react-spinners/RingLoader';
import { ILoadingProps } from './interfaces';

import { LoadingContainer } from './styled';


export function Loading({ message }: ILoadingProps) {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <RingLoader size={180} color={'#9901CD'} />
    </LoadingContainer>
  );
}
