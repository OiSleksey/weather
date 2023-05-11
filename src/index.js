import React from 'react';
import ReactDOM from 'react-dom/client';
// import './sass/index.scss';
import './sass/style.sass';
import App from './components/App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
