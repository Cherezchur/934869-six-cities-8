import { ActionType } from '../types/action';
import { Offers } from '../types/offers';
import {AuthorizationStatus} from '../const';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: {
    city,
  },
} as const);

export const loadRentalList = (offers: Offers) => ({
  type: ActionType.LoadRentalList,
  payload: {
    offers,
  },
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
