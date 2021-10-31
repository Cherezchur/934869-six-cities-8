import { Offer } from './types/offers';

export const sortLowToHigh = (offerA:Offer, offerB:Offer) => offerB.cost - offerA.cost;

export const sortHighToLow = (offerA:Offer, offerB:Offer) => offerA.cost - offerB.cost;

export const sortRatedLow = (offerA:Offer, offerB:Offer) => offerB.rating - offerA.rating;
