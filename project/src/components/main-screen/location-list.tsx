import { Locations } from '../../const';

function LocationList(): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {Locations.map((location) => {
        const keyValue = location;

        return (
          <li className="locations__item" key={keyValue}>
            <a className="locations__item-link tabs__item" href="#">
              <span>{location}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default LocationList;
