import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globalStyles.css'
import  'bootstrap/dist/css/bootstrap.min.css' ;
import AppRouters from './Routers/AppRouters';
import { Provider } from 'react-redux'
import { store } from './store/store'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouters />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

