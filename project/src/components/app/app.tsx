import Main from '../main/main';
// import SingIn from '../sing-in/sing-in';
// import Favorites from '../favorites/favorites';
// import Room from '../room/room';

type AppProps = {
  rentalOffersCount: number;
}

function App({rentalOffersCount}: AppProps): JSX.Element {
  return (
    <Main rentalOffersCount={rentalOffersCount}/>
    // <SingIn />
    // <Favorites />
    // <Room />
  );
}

export default App;
