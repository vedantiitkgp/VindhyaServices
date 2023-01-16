import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css';
import Taxi from './Taxi';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bids, { BidsLoader } from './Bids';

const router = createBrowserRouter([
  {
    path : '/',
    element : <div> Hello World </div>
  },
  {
    path : 'taxi',
    // element : <Taxi />,
    children : [
      {
        path : 'bids/:date',
        element : <Bids />,
        loader : BidsLoader
      },
      {
        path : '',
        element : <Taxi />
      }       
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
