
import GlobalStyle from './styles/global';
import { UserContextProvider } from './contexts/user.context';
import { Router } from './routes/Routes';

function App () {
  return (
    <>
      <UserContextProvider>
        <Router />
        <GlobalStyle />
      </UserContextProvider>
    </>
  );
}

export default App;
