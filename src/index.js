// import state, { changeInputMessageText, changeInputPostText, subscriber } from "./redux/state";
import store from "./redux/state";
// import { addMessageText, addNewPost } from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, } from "react-router-dom";
import { Profile } from './components/Profile/Profile';
import { Messages } from './components/Messages/Messages'
import { Dialog } from './components/Messages/Dialog/Dialog';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <RouterProvider router={
                createBrowserRouter(
                    createRoutesFromElements(
                        <Route path='/*' element={<App NavigationLinkData={state.NavigationLinkData} />} errorElement={<ErrorPage />}>
                            {/* <Route path='profile' element={<Profile postsData={state.postsData} addNewPost={store.addNewPost.bind(store)} changeInputPostText={store.changeInputPostText.bind(store)} inputPostText={state.inputPostText}  />}></Route> */}
                            <Route path='profile' element={<Profile postsData={state.postsData} dispatch={store.dispatch.bind(store)} inputPostText={state.inputPostText}  />}></Route>
                            <Route path='messages/' element={<Messages contactData={state.contactData}    />}>
                                <Route path='*' element={<Dialog textMessageData={state.textMessageData} inputMessageText={state.inputMessageText} addMessageText={store.addMessageText.bind(store)} changeInputMessageText={store.changeInputMessageText.bind(store)} />}></Route>
                            </Route>
                        </Route>
                    )
                )
            } />
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



