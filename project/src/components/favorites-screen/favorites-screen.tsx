import Logo from '../logo/logo';
import { Offers } from '../../types/offers';
import LocationItem from './location-item';

type FavoriteProps = {
  offers: Offers;
}

function FavoritesScreen({offers}:FavoriteProps): JSX.Element {
  // const ParisOffers = [offer];
  // const CologneOffers = [offer];
  // const BrusselsOffers = [offer];
  // const AmsterdamOffers = [offer];
  // const HamburgOffers = [offer];
  // const DusseldorfOffers = [offer];

  // offers.forEach((offer) => {
  //   switch (offer.city) {
  //     case 'Paris':
  //       ParisOffers.push(offer);
  //       break;
  //     case 'Cologne':
  //       CologneOffers.push(offer);
  //       break;
  //     case 'Brussel':
  //       BrusselsOffers.push(offer);
  //       break;
  //     case 'Amsterdam':
  //       AmsterdamOffers.push(offer);
  //       break;
  //     case 'Hamburg':
  //       HamburgOffers.push(offer);
  //       break;
  //     case 'Dusseldorf':
  //       DusseldorfOffers.push(offer);
  //       break;
  //   }
  // });

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
              <LocationItem
                offers={offers}
                location={'Cologne'}
              />
              <LocationItem
                offers={offers}
                location={'Brussels'}
              />
              <LocationItem
                offers={offers}
                location={'Amsterdam'}
              />
              <LocationItem
                offers={offers}
                location={'Hamburg'}
              />
              <LocationItem
                offers={offers}
                location={'Dusseldorf'}
              />
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

export default FavoritesScreen;
