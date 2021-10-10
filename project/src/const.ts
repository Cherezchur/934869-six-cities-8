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
