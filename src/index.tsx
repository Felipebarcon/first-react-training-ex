import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App/App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import traductions from "./traductions";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Traduction

const langue = navigator.language.substring(0, 2);
let messages = traductions.fr;
switch (langue) {
    case "en": messages= traductions.en; break;
    case "es": messages= traductions.es; break;
}
root.render(
    <IntlProvider locale={langue} messages={messages}>
      <App />
    </IntlProvider>
);

reportWebVitals();
