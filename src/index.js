import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyDmkyZP-NRor7uD1T8BpOmvLOtKaYr__FI",
    authDomain: "mientretenimiento-8622f.firebaseapp.com",
    databaseURL: "https://mientretenimiento-8622f.firebaseio.com",
    projectId: "mientretenimiento-8622f",
    storageBucket: "mientretenimiento-8622f.appspot.com",
    messagingSenderId: "1084090223733"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
