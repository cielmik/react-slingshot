import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

function renderApp(RootComponent) {
  const mountApp = document.querySelector('#app');

  if (mountApp) {
    ReactDOM.render(
      <AppContainer>
        <Provider store={createStoreWithMiddleware(reducers)}>
          <RootComponent />
        </Provider>
      </AppContainer>
      , mountApp
    );
  }
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    renderApp(NextApp);
  });
}
