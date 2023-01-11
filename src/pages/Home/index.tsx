import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { InfoCardAge } from '../../components/InfoCardAge';
import { InfoCard } from '../../components/InfoCardCity';
import { UserContext } from '../../contexts/user.context';
import { students } from '../../mock/students';
import {
  ContainerHome,
  ContentCardAge,
  ContentCardCity,
  ContentHome,
} from './styled';

export function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(UserContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const totalNumberOfStudents = students.length;

  const averageAge = students.reduce(function (acc, students) {
    return acc + students.age / totalNumberOfStudents;
  }, 0);

  const filterIdade = students.filter((students) => students.age > 21);
  const over21YearsOldPercentage = (
    (filterIdade.length * 100) /
    totalNumberOfStudents
  ).toFixed(2);


  const countedStudentsPerCity = students.reduce((acc, students) => {
    return { ...acc, [students.city]: (acc[students.city] ?? 0) + 1 };
  }, {} as { [key: string]: number });

  const studentsPerCity = Object.entries(countedStudentsPerCity);

  return (
    <>
      <Header />

      <ContainerHome>
        <h1>Informações:</h1>

        <ContentHome>

          <ContentCardCity>
            <h2>Quantidade de aluno por cidade:</h2>
            {studentsPerCity.map((city, i) => {
              return (
                <InfoCard key={String(i)} city={city[0]} theAmount={city[1]} />
              );
            })}
          </ContentCardCity>



          <ContentCardAge>
            <h2>Curiosidade sobre os alunos:</h2>
            <InfoCardAge
              middleAges={averageAge}
              percentage={Number(over21YearsOldPercentage)}
            />
          </ContentCardAge>

        </ContentHome>
      </ContainerHome>
    </>
  );
}
