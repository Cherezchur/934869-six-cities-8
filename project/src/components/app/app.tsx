// import {connect, ConnectedProps} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import SingInScreen from '../sing-in-screen/sing-in-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
// import LoadingScreen from '../loading-screen/loading-screen';
// import {isCheckedAuth} from '../../utils';
// import {State} from '../../types/state';
import browserHistory from '../../browser-history';

// const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
//   authorizationStatus,
//   isDataLoaded,
// });

// const connector = connect(mapStateToProps);

// type PropsFromRedux = ConnectedProps<typeof connector>;

function App(): JSX.Element {

  // const {authorizationStatus, isDataLoaded} = props;

  // if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen />}
        />
        <Route exact path={AppRoute.Room}>
          <RoomScreen />
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

// export {App};
export default App;
