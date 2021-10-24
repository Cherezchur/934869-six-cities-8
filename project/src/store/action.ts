import { ActionType, ChangeCity, FillingRentalList } from '../types/action';
import { Offers } from '../types/offers';

export const changeCity = (city: string): ChangeCity => ({
  type: ActionType.changeCity,
  payload: city,
});

export const fillingRentalList = (offers: Offers): FillingRentalList => ({
  type: ActionType.fillingRentalList,
  payload: offers,
});
