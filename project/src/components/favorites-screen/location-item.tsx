import { Offers } from '../../types/offers';
import FavoritesCard from '../card/favorites-card';

type LocationItemProps = {
  offers: Offers;
  location: string ;
}

function LocationItem({offers, location}: LocationItemProps): JSX.Element {
  console.log(offers);

  const localOffers:Offers = [];

  offers.forEach((offer) => {
    if(location === offer.city) {
      localOffers.push(offer);
    }
  });

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {localOffers.map((offer) => {
          const keyValue = offer.id;
          return (
            <FavoritesCard
              key={keyValue}
              offer = {offer}
            />
          );
        })}
      </div>
    </li>
  );
}

export default LocationItem;
