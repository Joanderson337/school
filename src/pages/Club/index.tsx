import { useNavigate } from 'react-router-dom';
import { Icon } from '../../assets/Icon';
import { InfoCardHobbies } from '../../components/InfoCardHobbies';
import { Student } from '../../mock/interfaces';
import { students } from '../../mock/students';
import { Background, ClubHeader, ClubHeadline, ContainerHome, SignUpBack } from './styled';

export function Club() {

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/home');
  };


  const studentsPerHobbies = students.reduce((acc, student) => {
    const newStudentToHobbies = student.hobbies.map((hobby) => ({
      [hobby]: [...(acc[hobby] ?? []), student],
    }));
    return Object.assign({ ...acc }, ...newStudentToHobbies);
  }, {} as { [key: string]: Student[] });

  const mappedStudentsPerHobbies = Object.entries(studentsPerHobbies);

  return (
    <Background>
      <ClubHeader>
        <ClubHeadline>Clubes/Alunos:</ClubHeadline>
        <SignUpBack onClick={handleHome}>
          <Icon name="back" size={12} />
              Voltar
        </SignUpBack>
      </ClubHeader>
      {mappedStudentsPerHobbies.map((hobby, i) => {
        return (
          <ContainerHome key={String(i)}>
            <InfoCardHobbies hobbies={hobby[0]} />
            {hobby[1].map((student, i) => {
              return <p key={String(i)}>{student.name}</p>;
            })}
          </ContainerHome>
        );
      })}
    </Background>
  );
}
