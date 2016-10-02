import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const mountApp = document.querySelector('#app');

ReactDOM.render(
  <AppContainer>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </AppContainer>
  , mountApp);

  if (module.hot) {
    module.hot.accept('./components/app', () => {
      const NextApp = require('./components/app').default;
      ReactDOM.render(
        <AppContainer>
          <Provider store={createStoreWithMiddleware(reducers)}>
            <NextApp />
          </Provider>
        </AppContainer>,
        mountApp
      );
    });
  }
