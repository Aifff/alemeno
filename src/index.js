// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from './redux/store';
// import { configureStore } from './redux/store';
import store from './redux/store';
import App from './App'; // Import your root component

// Create your Redux store
// const store = createStore(rootReducer); // Pass your root reducer to createStore
// const store = configureStore({reducer: rootReducer}); // Pass your root reducer to createStore


ReactDOM.render(
  <Provider store={store}> {/* Wrap your root component with Provider and pass the store */}
    <App />
  </Provider>,
  document.getElementById('root')
);
