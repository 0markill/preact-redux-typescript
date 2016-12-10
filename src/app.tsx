import { Provider, connect } from 'preact-redux';
import { h, render } from 'preact';
import { App as AppComponent } from './components/app';
import reducers from './reducers';

import { createStore } from 'redux';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
);

render(<App />, document.querySelector('#app'));
