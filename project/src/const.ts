import { Cities } from './types/city';

export enum AppRoute {
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Main = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export const Locations: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const SortItems: string[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';

export const cities: Cities= [
  {
    name: 'Paris',
    lat: 48.8534100,
    lng: 2.3488000,
    zoom: 12,
  },
  {
    name: 'Cologne',
    lat: 50.9333300,
    lng: 6.9500000,
    zoom: 12,
  },
  {
    name: 'Brussels',
    lat: 50.8504500,
    lng: 4.3487800,
    zoom: 12,
  },
  {
    name: 'Amsterdam',
    lat: 52.3740300,
    lng: 4.8896900,
    zoom: 12,
  },
  {
    name: 'Hamburg',
    lat: 53.5753200,
    lng: 10.0153400,
    zoom: 12,
  },
  {
    name: 'Dusseldorf',
    lat: 51.2217200,
    lng: 6.7761600,
    zoom: 12,
  },
];
