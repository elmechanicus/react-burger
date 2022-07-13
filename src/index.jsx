import ReactDOM from 'react-dom';
import App from './components/App/App';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
