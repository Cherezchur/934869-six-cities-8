import { Reviews } from './reviews';

export type Image = string;

export type Good = string;

export type Good = string;

export type Host = {
  avatar: string;
  name: string;
  isPro: boolean;
  id: number;
  ['avatar_url']?: string;
  ['is_pro']?: boolean;
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
  goods: Good[];
  host: Host;
  location: Location;
  reviews: Reviews;
  ['is_favorite']?: boolean;
  ['is_premium']?: boolean;
  ['max_adults']?: number;
  ['preview_image']?: string;
}

export type Offers = Offer[];
