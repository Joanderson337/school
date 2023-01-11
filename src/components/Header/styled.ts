import styled from 'styled-components';
import Colors from '../../styles/theme';
import background from '../../assets/Icon/image/background.webp';

export const ContainerHeader = styled.header`
  background: url('${background}') ;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  justify-content: center;
  height: 12.4rem;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const ContentHeader = styled.div`
  width: 100%;
  max-width: 76rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    justify-content: center;
    gap: 3rem;
  }
`;

export const Details = styled.div`
 > button {
    background: transparent;
    font-size: 3rem;
    color: ${Colors.text.dark};
  }
  > button {
    margin-top: 1rem;
    background: transparent;
    border: 0;
    color: ${Colors.text.dark};
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    gap: 2rem;
  }

  @media (max-width: 600px) {
      button{
        font-size: 1.2rem;
        gap: 1rem;
      }
  }

`;

export const Club = styled.button`
  background: transparent;
  color: ${Colors.text.dark};
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
