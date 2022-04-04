import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEPtTaKEZzE6tiWR-apuMq21x-oy-pT0g",
  authDomain: "covid-19-tracker-48d29.firebaseapp.com",
  projectId: "covid-19-tracker-48d29",
  storageBucket: "covid-19-tracker-48d29.appspot.com",
  messagingSenderId: "195874009940",
  appId: "1:195874009940:web:15fb94d3aca3c9ee548ec1",
  measurementId: "G-43GPFYZTMC"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
