import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import {startGetAccount} from './actions/userAction'
import {startGetAllContacts } from './actions/contactAction'

const store = configureStore()

if(localStorage.getItem('contact-token')){
    store.dispatch(startGetAccount(localStorage.getItem('contact-token')))
    store.dispatch(startGetAllContacts())
}

const jsx = (
  <Provider store={store}>
      <App />
  </Provider>
)


ReactDOM.render(jsx,document.getElementById('root'));
