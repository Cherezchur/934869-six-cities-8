import OffersList from './offers-list';
import {Offers, Locations} from '../../types/offers';
import Map from '../map/map';
import { Cities, City } from '../../types/city';
import LocationList from './location-list';
import { useState } from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {fillingRentalList} from '../../store/action';
import {State} from '../../types/state';
import {Actions} from '../../types/action';
import SortList from './sort-list';

type MainProps = {
  cities: Cities;
}

const mapStateToProps = ({city, offers}: State) => ({
  city,
  offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onOffers() {
    dispatch(fillingRentalList());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainProps;

function MainScreen(props: ConnectedComponentProps): JSX.Element {

  const {cities, city, offers, onOffers} = props;
  const locations:string[] = [];
  const points:Locations = [];
  const localOffers:Offers = [];
  const [selectedSort, setSelectedSort] = useState('Popular');
  // const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);
  let currentLocation:City;

  const onSortItemClick = (sortItem: string) => setSelectedSort(sortItem);

  onOffers();

  const getCurrentLocation = ():City => {
    cities.forEach((localCity) => {
      if(localCity.name === city) {
        currentLocation = localCity;
      }
    });
    return currentLocation;
  };

  cities.forEach((localCity) => {
    locations.push(localCity.name);
  });

  offers.forEach((offer) => {
    if(offer.city === city){
      localOffers.push(offer);
      points.push(offer.location);
    }
  });

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList
              locations={locations}
              currentCity={city}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{localOffers.length} places to stay in {city}</b>
              <SortList
                onSortItemClick={onSortItemClick}
                currentSort={selectedSort}
              />
              <OffersList
                currentSort={selectedSort}
                localOffers={localOffers}
              />
            </section>
            <div className="cities__right-section">
              <Map
                location={getCurrentLocation()}
                points={points}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
