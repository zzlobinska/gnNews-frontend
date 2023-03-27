import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import i18n from './translations/config';
import AppRouter from './appRouter';
import store from './store';

import 'src/styles/reset.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
