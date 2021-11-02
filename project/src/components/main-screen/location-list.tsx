import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeCity} from '../../store/action';
import {Actions} from '../../types/action';

type LocationListProps = {
  locations: string[];
  currentCity: string;
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string){
    dispatch(changeCity(city));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & LocationListProps;

function LocationList(props: ConnectedComponentProps): JSX.Element {

  const {onChangeCity, locations, currentCity } = props;

  return (
    <ul className="locations__list tabs__list">
      {locations.map((location) => {
        const keyValue = location;

        return (
          <li className="locations__item "
            key={keyValue}
          >
            <a
              className={currentCity === location ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
              href="#"
              onClick={() => {
                onChangeCity(location);
              }}
            >
              <span>{location}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export {LocationList};
export default connector(LocationList);
