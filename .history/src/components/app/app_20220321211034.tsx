import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute }   from '../../utils/const/const';
import Main from '../main/main';
import Login from '../login/login';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
