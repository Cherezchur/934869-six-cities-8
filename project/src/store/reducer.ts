import { State } from '../types/state';
import { ActionType, Actions } from '../types/action';

const initialState = {
  city: 'Amsterdam',
  offers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.FillingRentalList:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export { reducer };
