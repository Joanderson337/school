import { Club, ContainerHeader, ContentHeader, Details } from './styled';
import { signOut } from 'firebase/auth';
import { auth } from '../../server/firebase';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../assets/Icon';

export function Header() {
  const navigate = useNavigate();

  const handleClub = () => {
    navigate('/Club');
  };

  const handleHome = () => {
    navigate('/Home');
  };

  return (
    <ContainerHeader>
      <ContentHeader>
        <Details>
          <button data-testid="home" type="button" onClick={handleHome}>
           Escola estrela do saber
          </button>
          <button data-testid="close" type="button" onClick={() => signOut(auth)}>
            Sair <Icon name="x" size={18} />
          </button>
        </Details>
        <Club data-testid="club" onClick={handleClub}>Clubes dos alunos</Club>
      </ContentHeader>
    </ContainerHeader>
  );
}
