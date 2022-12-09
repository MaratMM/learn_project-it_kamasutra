import state, { changeInputMessageText, changeInputPostText } from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from "./error-page";
import { addMessageText, addNewPost } from './redux/state';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, } from "react-router-dom";
import { Profile } from './components/Profile/Profile';
import { Messages } from './components/Messages/Messages'
import { Dialog } from './components/Messages/Dialog/Dialog';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <RouterProvider router={
                createBrowserRouter(
                    createRoutesFromElements(
                        <Route path='/*' element={<App NavigationLinkData={state.NavigationLinkData} />} errorElement={<ErrorPage />}>
                            <Route path='profile' element={<Profile postsData={state.postsData} addNewPost={addNewPost} inputPostText={state.inputPostText} changeInputPostText={changeInputPostText} />}></Route>
                            <Route path='messages/' element={<Messages contactData={state.contactData} addMessageText={addMessageText} inputMessageText={state.inputMessageText} changeInputMessageText={changeInputMessageText} />}>
                                <Route path='*' element={<Dialog textMessageData={state.textMessageData} />}></Route>
                            </Route>
                        </Route>
                    )
                )
            } />
        </React.StrictMode>
    );
}

rerenderEntireTree(state);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



