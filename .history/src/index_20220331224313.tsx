import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { OfferData } from './mocks/offerData';

const Settings = {
  PLACES_COUNT: 237,
};


ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount={Settings.PLACES_COUNT}
      offerData={OfferData}
    />
  </React.StrictMode>,
  document.getElementById('root'));
