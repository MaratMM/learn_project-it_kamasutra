import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from "./error-page";
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, } from "react-router-dom";
import { Profile } from './components/Profile/Profile';
import { Messages } from './components/Messages/Messages'
import { Dialog } from './components/Messages/Dialog/Dialog';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/*' element={<App />} errorElement={<ErrorPage />}>
      <Route path='profile' element={<Profile />}></Route>
      <Route path='messages/*' element={<Messages />}>
        <Route path='Katerina' element={<Dialog />}></Route>
      </Route>
    </Route>
  )
)



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
