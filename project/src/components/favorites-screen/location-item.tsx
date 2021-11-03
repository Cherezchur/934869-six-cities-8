import { Offers } from '../../types/offers';
import FavoritesCard from '../card/favorites-card';

type LocationItemProps = {
  offers: Offers;
  location: string;
}

function LocationItem({offers, location}: LocationItemProps): JSX.Element {

  return offers.length > 0 ? (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => {
          const keyValue = offer.id;
          return (
            <FavoritesCard
              key={keyValue}
              offer={offer}
            />
          );
        })}
      </div>
    </li>
  ) : (<li className="visually-hidden"></li>);
}

export default LocationItem;
