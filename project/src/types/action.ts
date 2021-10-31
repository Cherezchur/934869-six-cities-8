import { Offers } from '../types/offers';

export enum ActionType {
  ChangeCity = 'manePage/changeCity',
  FillingRentalList = 'manePage/fillingRentalList',
}

export type ChangeCity = {
  type: ActionType.ChangeCity;
  payload: string;
};

export type FillingRentalList = {
  type: ActionType.FillingRentalList;
  payload: Offers;
};

export type Actions = ChangeCity | FillingRentalList;
