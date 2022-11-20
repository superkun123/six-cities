import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AppRoute}   from '../../utils/const/const';
import Main from '../main/main';
import Login from '../login/login';
import Favorite from '../favorites/favorites';
import Property from '../offer-card-page/offer-card-page';
import Error from '../404/404';
import { OfferData} from '../../types/types';

type AppScreenProps = {
  offerData:OfferData
}

type AuthType  = {
  children: JSX.Element,
  redirectTo: string
}


function App({offerData}:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.SignIn} element={<Login></Login>}>
        </Route>
        <Route path={AppRoute.Main} element={<Main  offerData={offerData}></Main>}>
        </Route>
        <Route
          path={AppRoute.Favorites }
          element={
            <RequireAuth redirectTo={AppRoute.SignIn}>
              <Favorite  offerData={offerData}></Favorite>
            </RequireAuth>
          }
        />
        <Route path={AppRoute.Room} element={<Property offerData={offerData}></Property>}>
        </Route>
        <Route path="*" element={<Error></Error>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


function RequireAuth({ children, redirectTo }:AuthType) {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default App;
