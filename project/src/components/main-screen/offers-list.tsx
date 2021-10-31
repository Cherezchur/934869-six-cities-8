import { Offers } from '../../types/offers';
import Card from '../card/card';
import {useState } from 'react';
import { sortLowToHigh, sortHighToLow, sortRatedLow} from '../../utils';

type OffersListProps = {
  localOffers: Offers;
  currentSort: string;
}

function OffersList({localOffers, currentSort}: OffersListProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState('');

  let sortsOffers:Offers = localOffers;

  switch (currentSort) {
    case 'Price: low to high':
      sortsOffers.sort(sortLowToHigh);
      break;
    case 'Price: high to low':
      sortsOffers.sort(sortHighToLow);
      break;
    case 'Top rated first':
      sortsOffers.sort(sortRatedLow);
      break;
    case 'Popular':
      sortsOffers = localOffers;
      break;
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        sortsOffers.map((offer) => {
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
        })
      }
    </div>
  );
}

export default OffersList;
