import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './index2.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

import {Provider} from 'react-redux';
import { store } from './redux/store';
import { fetchPopular } from './redux/recipeSlice';
import { fetchRecent } from './redux/recipeSlice';


store.dispatch(fetchPopular());
store.dispatch(fetchRecent());


const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_OAUTH_DOMAIN;
const client_id = process.env.REACT_APP_OAUTH_CLIENTID;
//console.log('PROCESS', process.env)

root.render(
  <React.StrictMode>
   <Auth0Provider
    domain={domain}
    clientId={client_id}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
    <App />
    </Provider>
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
