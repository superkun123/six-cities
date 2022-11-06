import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offerData } from './mocks/offerData';
import { Provider } from 'react-redux';
import store from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offerData={offerData}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
