import styled from 'styled-components';
import background from '../../assets/Icon/image/background.webp';
import Colors from '../../styles/theme';

export const ContainerHome = styled.div`
   display: flex;
   justify-content: center;
    gap: 20px;
   align-items: center;

  > P{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 3rem;
  width: 8rem;
  background-color: ${Colors.input.background};
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  color: ${Colors.text.dark};
   }

`;

export const ClubHeadline = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 20px 0;
    font-size: 1.6rem;
`;

export const ClubHeader = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
`;

export const SignUpBack = styled.button`
  font-size: 1.3rem;
  font-weight: 600;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const Background = styled.div`
     height: 100vh;
     background: url('${background}') ;
    background-repeat: no-repeat;
    background-size: cover;
`;
