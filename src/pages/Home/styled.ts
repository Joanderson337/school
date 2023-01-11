import styled from 'styled-components';
import background from '../../assets/Icon/image/background.webp';

export const ContainerHome = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;

    background: url('${background}') ;
    background-repeat: no-repeat;
    background-position: center;

    >h1{
      font-size: 2.1rem;
      font-weight: bold;
    }

    h2{
      font-size: 1.5rem;
      font-weight: 600;
    }
`;

export const ContentHome = styled.section`
      display: flex;
      gap: 5rem;
      margin-top: 4rem;

      @media (max-width: 600px) {
      flex-direction: column;
  }
`;

export const ContentCardCity = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
`;


export const ContentCardAge = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
`;


