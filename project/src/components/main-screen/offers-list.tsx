import { Offers } from '../../types/offers';
import Card from '../card/card';
import {useState } from 'react';

type OffersListProps = {
  localOffers: Offers;
}

function OffersList({localOffers}: OffersListProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState('');

  return (
    <div className="cities__places-list places__list tabs__content">
      {localOffers.map((offer) => {
        const keyValue = `${offer.id}`;
        return (
          <article
            key={keyValue}
            onMouseOver={() => setActiveCardId(`${activeCardId + keyValue}`.slice(activeCardId.length))}
            className="cities__place-card place-card"
          >
            <Card
              offer={offer}
            />
          </article>
        );
      })}
    </div>
  );
}

export default OffersList;
