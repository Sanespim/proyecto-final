import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain='santiman99.us.auth0.com'
    clientId='OB6AwJbebqLG24yKhfphBxQ93jjhM6yL'
    redirectUri={window.location.origin}>
    <App/>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
