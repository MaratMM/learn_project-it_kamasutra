// import state, { changeInputMessageText, changeInputPostText, subscriber } from "./redux/state";
import store from "./redux/reduxStore";
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
                        <Route path='/*' element={<App />} errorElement={<ErrorPage />}>
                            {/* <Route path='profile' element={<Profile postsData={state.postsData} addNewPost={store.addNewPost.bind(store)} changeInputPostText={store.changeInputPostText.bind(store)} inputPostText={state.inputPostText}  />}></Route> */}
                            <Route path='profile' element={<Profile postsData={state.profilePage.postsData} dispatch={store.dispatch.bind(store)} inputPostText={state.profilePage.inputPostText}  />}></Route>
                            <Route path='messages/' element={<Messages contactData={state.messagePage.contactData}    />}>
                                {/* <Route path='*' element={<Dialog textMessageData={state.messagePage.textMessageData} inputMessageText={state.messagePage.inputMessageText} addMessageText={store.addMessageText.bind(store)} changeInputMessageText={store.changeInputMessageText.bind(store)} />}></Route> */}
                                <Route path='*' element={<Dialog textMessageData={state.messagePage.textMessageData} inputMessageText={state.messagePage.inputMessageText} dispatch={store.dispatch.bind(store)} />}></Route>
                            </Route>
                        </Route>
                    )
                )
            } />
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());
// store.subscribe(rerenderEntireTree);
store.subscribe(()=>{
    rerenderEntireTree(store.getState());
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



