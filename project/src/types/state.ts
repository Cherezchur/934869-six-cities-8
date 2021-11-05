import { Offers } from './offers';
import { AuthorizationStatus } from '../const';

export type State = {
  city: string,
  offers: Offers,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
