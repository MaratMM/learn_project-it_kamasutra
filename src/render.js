import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from "./error-page";
import reportWebVitals from './reportWebVitals';
// import state, { addNewPost } from './redux/state.js'

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, } from "react-router-dom";
import { Profile } from './components/Profile/Profile';
import { Messages } from './components/Messages/Messages'
import { Dialog } from './components/Messages/Dialog/Dialog';

// export let Router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/*' element={<App NavigationLinkData={state.NavigationLinkData} />} errorElement={<ErrorPage />}>
//             <Route path='profile' element={<Profile postsData={state.postsData} addNewPost={state.addNewPost} />}></Route>
//             <Route path='messages/*' element={<Messages contactData={state.contactData} />}>
//                 <Route path='Katerina' element={<Dialog textMessageData={state.textMessageData} />}></Route>
//             </Route>
//         </Route>
//     )
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            {/* <RouterProvider router={Router} /> */}
            <RouterProvider router={
                createBrowserRouter(
                    createRoutesFromElements(
                        <Route path='/*' element={<App NavigationLinkData={state.NavigationLinkData} />} errorElement={<ErrorPage />}>
                            <Route path='profile' element={<Profile postsData={state.postsData} addNewPost={state.addNewPost} />}></Route>
                            <Route path='messages/*' element={<Messages contactData={state.contactData} />}>
                                <Route path='Katerina' element={<Dialog textMessageData={state.textMessageData} />}></Route>
                            </Route>
                        </Route>
                    )
                )
            } />
        </React.StrictMode>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();