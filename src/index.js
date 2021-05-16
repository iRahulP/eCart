import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyAZU9ZGhaGVdTHqVhNj8uzD-pK8X64qZBc",
  authDomain: "ecart-ef6eb.firebaseapp.com",
  projectId: "ecart-ef6eb",
  storageBucket: "ecart-ef6eb.appspot.com",
  messagingSenderId: "1046808616650",
  appId: "1:1046808616650:web:cc7033af8c2037a3c59e33"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);