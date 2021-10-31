import { Reviews } from './reviews';

export type Photo = string;

export type HouseholdItems = string;

export type OwnerInformation = {
  avatar: string;
  name: string;
  isPro: boolean;
}

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type Locations = Location[]

export type Offer = {
  id: number;
  city: string;
  photo: Photo[];
  title: string;
  description: string;
  premium: boolean;
  housingType: string;
  rating: number;
  bedroomsNumber: number;
  guestsMax: number;
  cost: number;
  householdItems: HouseholdItems[];
  ownerInformation: OwnerInformation;
  location: Location;
  reviews: Reviews;
}

export type Offers = Offer[];
