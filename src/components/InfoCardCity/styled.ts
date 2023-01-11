import styled from 'styled-components';
import background from '../../assets/Icon/image/card.jpg';
import Colors from '../../styles/theme';


export const ContainerCard = styled.div`
  height: 18rem;
  width: 22rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;


  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: red;
  background: url('${background}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  >p{
    font-size: 1.2rem;
    font-weight: 500;
    color: ${Colors.text.dark};
  }

  span{
    font-size: 1.1rem;
    font-weight: bold;
    color: ${Colors.text.dark};
  }

`;

