import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// you can also define here global axios url so so next time axios will go to that url
axios.interceptors.request.use(config=>{
  console.log(config.url);
  return config
})
axios.defaults.baseURL='https://jsonplaceholder.typicode.com/'

// same goes for response inspectors
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
