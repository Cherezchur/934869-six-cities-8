import Logo from '../logo/logo';
import { Offers } from '../../types/offers';
import LocationItem from './location-item';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import { cities } from '../../const';

const mapStateToProps = ({city, offers}: State) => ({
  city,
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function FavoritesScreen(props: ConnectedComponentProps): JSX.Element {

  const { city, offers} = props;

  const locations:string[] = [];

  cities.forEach((localCity) => {
    locations.push(localCity.name);
  });

  const locationOffers:Offers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {locations.map((location) => {
                const keyValue = location;
                return (
                  <LocationItem
                    key={keyValue}
                    offers={locationOffers}
                    location={city}
                  />);
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export {FavoritesScreen};
export default connector(FavoritesScreen);
