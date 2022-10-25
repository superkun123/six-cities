import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offerData } from './mocks/offerData';
import { Provider } from 'react-redux';
import store from './store/store';


const Settings = {
  PLACES_COUNT: 237,
};


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesCount={Settings.PLACES_COUNT}
        offerData={offerData}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
