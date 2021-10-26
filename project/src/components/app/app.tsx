import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import SingInScreen from '../sing-in-screen/sing-in-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Offers} from '../../types/offers';
import { Cities } from '../../types/city';


type AppProps = {
  rentalOffersCount: number;
  offers: Offers;
  cities: Cities;
}

function App({rentalOffersCount, offers, cities}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            rentalOffersCount={rentalOffersCount}
            offers={offers}
            cities={cities}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route exact path={AppRoute.Room}>
          <RoomScreen
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SingInScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
