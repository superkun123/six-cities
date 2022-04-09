import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute }   from '../../utils/const/const';
import Main from '../main/main';
import Login from '../login/login';
import Favorite from '../favorites/favorites';
import Property from '../property/property';

type AppScreenProps = {
  placesCount: number
}

function App({placesCount}:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main  placesCount={placesCount}></Main>}>
        </Route>
        <Route path={AppRoute.SignIn} element={<Login></Login>}>
        </Route>
        <Route path={AppRoute.Favorites} element={<Favorite></Favorite>}>
        </Route>
        <Route path={AppRoute.Room} element={<Property></Property>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
