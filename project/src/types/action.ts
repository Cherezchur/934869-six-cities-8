import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';

import {
  changeCity,
  loadRentalList,
  requireAuthorization,
  requireLogout,
  redirectToRoute
} from '../store/action';


export enum ActionType {
  ChangeCity = 'manePage/changeCity',
  LoadRentalList = 'data/loadRentalList',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'page/redirectToRoute'
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof loadRentalList>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
