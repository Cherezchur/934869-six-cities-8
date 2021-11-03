import { Offer} from './types/offers';
import {AuthorizationStatus} from './const';

export const sortLowToHigh = (offerA:Offer, offerB:Offer) => offerA.price - offerB.price;

export const sortHighToLow = (offerA:Offer, offerB:Offer) => offerB.price - offerA.price;

export const sortRatedLow = (offerA:Offer, offerB:Offer) => offerB.rating - offerA.rating;

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

