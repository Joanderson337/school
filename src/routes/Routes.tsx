import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { UserContext } from '../contexts/user.context';
import { userConverter } from '../converters/firestore.converters';
import { AuthenticationGuard } from '../guards/authGuard';
import { Club } from '../pages/Club';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { auth, db } from '../server/firebase';

export function Router() {

  const [isInitializing, setIsInitializing] = useState(true);

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user;

    if (isSigningOut) {
      logoutUser();

      return setIsInitializing(false);
    }

    const isSigningIn = !isAuthenticated && user;

    if (isSigningIn) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users').withConverter(userConverter),
          where('id', '==', user.uid)
        )
      );

      const userFromFirestore = querySnapshot.docs[0]?.data();

      loginUser(userFromFirestore);

      return setIsInitializing(false);
    }

    return setIsInitializing(false);
  });

  if (isInitializing) return <Loading />;

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/Home" element={
            <AuthenticationGuard>
              <Home />
            </AuthenticationGuard>
          } />

          <Route path="/Club" element={
            <AuthenticationGuard>
              <Club />
            </AuthenticationGuard>
          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}
