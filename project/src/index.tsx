import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers} from './mocks/offers';
import cities from './mocks/cities';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const Setting = {
  RENTAL_OFFERS_COUNT: 313,
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentalOffersCount = {Setting.RENTAL_OFFERS_COUNT}
        offers = {offers}
        cities={cities}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
