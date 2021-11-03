import { Reviews } from './reviews';

export type Image = string;

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

export type city = {
  location: Location;
  name: string;
}

export type Locations = Location[]

export type Offer = {
  id: number;
  city: city;
  images: Image[];
  previewImage: Image;
  title: string;
  description: string;
  isPremium: boolean;
  isFavorite: boolean;
  type: string;
  rating: number;
  bedrooms: number;
  guestsMax: number;
  price: number;
  householdItems: HouseholdItems[];
  ownerInformation: OwnerInformation;
  location: Location;
  reviews: Reviews;
  ['is_favorite']?: boolean;
  ['is_premium']?: boolean;
  ['max_adults']?: number;
  ['preview_image']?: string;
}

export type Offers = Offer[];
