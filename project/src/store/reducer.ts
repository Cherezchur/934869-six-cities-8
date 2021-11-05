import { State } from '../types/state';
import { ActionType, Actions } from '../types/action';
import {AuthorizationStatus} from '../const';

const initialState = {
  city: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity: {
      const {city} = action.payload;
      return {...state, city};
    }
    case ActionType.LoadRentalList: {
      const {offers} = action.payload;
      return {...state, offers};
    }
    case ActionType.RequireAuthorization: {
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    }
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export { reducer };
