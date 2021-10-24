import { State } from '../types/state';
import { ActionType, Actions } from '../types/action';

const initialState = {
  city: 'Paris',
  localOffers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.changeCity:
      return {...state, city: action.payload};
    case ActionType.fillingRentalList:
      return {...state, localOffers: action.payload};
    default:
      return state;
  }
};

export { reducer };
