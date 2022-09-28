import {createRoot} from 'react-dom/client';
import App from './components/App/App';
import {StrictMode} from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router} from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>,
);
