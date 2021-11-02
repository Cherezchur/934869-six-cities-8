import { ActionType, ChangeCity, FillingRentalList } from '../types/action';
import { offers } from '../mocks/offers';

export const changeCity = (city: string): ChangeCity => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const fillingRentalList = (): FillingRentalList => ({
  type: ActionType.FillingRentalList,
  payload: offers,
});
