import { Offers } from './offers';

export enum ActionType {
  changeCity = 'manePage/changeCity',
  fillingRentalList = 'manePage/fillingRentalList',
}

export type ChangeCity = {
  type: ActionType.changeCity;
  payload: string;
};

export type FillingRentalList = {
  type: ActionType.fillingRentalList;
  payload: Offers;
};

export type Actions = ChangeCity | FillingRentalList;
