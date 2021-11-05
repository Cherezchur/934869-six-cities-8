import OffersList from './offers-list';
import {Offers, Locations, Location } from '../../types/offers';
import Map from '../map/map';
import { City } from '../../types/city';
import LocationList from './location-list';
import { useState } from 'react';
// import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
// import {loadRentalList} from '../../store/action';
import {State} from '../../types/state';
// import {Actions} from '../../types/action';
import SortList from './sort-list';
import { cities } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';

const mapStateToProps = ({city, offers, isDataLoaded}: State) => ({
  city,
  offers,
  isDataLoaded,
});

// const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
//   onOffers(offers: Offers) {
//     dispatch(loadRentalList(offers));
//   },
// });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function MainScreen(props: ConnectedComponentProps): JSX.Element {

  const {city, offers, isDataLoaded} = props;
  const locations:string[] = [];
  const points:Locations = [];
  const localOffers:Offers = [];
  const [selectedSort, setSelectedSort] = useState('Popular');
  const [selectedPoint, setSelectedPoint] = useState<Location | undefined>(undefined);

  let currentLocation:City;

  const adaptedOffers = offers.map((offer) => {
    const host = {
      avatar: offer.host['avatar_url'],
      name: offer.host.name,
      isPro: offer.host['is_pro'],
      id: offer.host.id,
    };

    const adaptedOffer = Object.assign(
      {},
      offer,
      host,
      {
        isFavorite: offer['is_favorite'],
        isPremium: offer['is_premium'],
        maxAdults: offer['max_adults'],
        previewImage: offer['preview_image'],
      },
    );

    return adaptedOffer;
  });

  const onSortItemClick = (sortItem: string) => setSelectedSort(sortItem);

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

  adaptedOffers.forEach((offer) => {
    if(offer.city.name === city){
      localOffers.push(offer);
      points.push(offer.location);
    }
  });

  const onListItemHover = (listItemId: number) => {
    const currentOffer = offers.find((offer) => offer.id === listItemId);
    const currentPoint = currentOffer?.location;
    setSelectedPoint(currentPoint);
  };

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

        {
          !isDataLoaded ?
            <LoadingScreen /> :
            (
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
                      onListItemHover={onListItemHover}
                    />
                  </section>
                  <div className="cities__right-section">
                    <Map
                      location={getCurrentLocation()}
                      points={points}
                      selectedPoint={selectedPoint}
                    />
                  </div>
                </div>
              </div>
            )
        }
      </main>
    </div>
  );
}

export {MainScreen};
export default connector(MainScreen);
