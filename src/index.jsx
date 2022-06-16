import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import store from './services/store.js';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
