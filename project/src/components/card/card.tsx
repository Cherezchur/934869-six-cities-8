import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';

type CardProps = {
  offer: Offer;
}

function Card(props: CardProps): JSX.Element {
  const {offer} = props;

  return (
    <div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href='#'>
          <img className="place-card__image" src={offer.photo[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.floor(offer.rating)*20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{
            pathname: `offer/${offer.id}`,
          }}
          >
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.housingType}</p>
      </div>
    </div>
  );
}

export default Card;
