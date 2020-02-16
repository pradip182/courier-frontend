import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './Components/Index';
import reducers from './reducers/index';

const store = createStore(reducers)

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  };
}

export default Root;