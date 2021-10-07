import Main from '../main/main';

type AppProps = {
  rentalOffersCount: number;
}

function App({rentalOffersCount}: AppProps): JSX.Element {
  return (
    <Main rentalOffersCount={rentalOffersCount}/>
  );
}

export default App;
