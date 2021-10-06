import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  RENTAL_OFFERS_COUNT: 313,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      rentalOffersCount = {Setting.RENTAL_OFFERS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
