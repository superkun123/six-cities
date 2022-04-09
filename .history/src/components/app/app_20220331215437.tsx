import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AppRoute}   from '../../utils/const/const';
import Main from '../main/main';
import Login from '../login/login';
import Favorite from '../favorites/favorites';
import Property from '../property/property';
import Error from '../404/404';
import { CardData } from '../../types/types';

type AppScreenProps = {
  placesCount: number,
  cardData:CardData
}

type AuthType  = {
  children: JSX.Element,
  redirectTo: string
}


function App({placesCount, cardData}:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main  placesCount={placesCount}></Main>}>
        </Route>
        <Route path={AppRoute.SignIn} element={<Login></Login>}>
        </Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <RequireAuth redirectTo={AppRoute.SignIn}>
              <Favorite></Favorite>
            </RequireAuth>
          }
        />
        <Route path={AppRoute.Room} element={<Property></Property>}>
        </Route>
        <Route path="*" element={<Error></Error>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


function RequireAuth({ children, redirectTo }:AuthType) {
  const isAuthenticated = false;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default App;
