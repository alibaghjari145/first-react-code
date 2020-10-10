import React from 'react';
import ReactDOM from 'react-dom';
import Headd from './comp/Headd';
import App from './comp/App';
import Main from './comp/Main'
import Foot from './comp/Foot'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Headd />
    <App />
    <Main />
    <Foot />
      

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
