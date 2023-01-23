import store from "./redux/reduxStore";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, } from "react-router-dom";
import { Profile } from './components/Profile/Profile';
import { Messages } from './components/Messages/Messages'
import { DialogContainer } from './components/Messages/Dialog/DialogContainer';
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <Provider store={store}>
            <React.StrictMode>
                <RouterProvider router={
                    createBrowserRouter(
                        createRoutesFromElements(
                            <Route path='/*' element={<App />} errorElement={<ErrorPage />}>
                                {/* <Route path='profile' element={<Profile postsData={state.postsData} addNewPost={store.addNewPost.bind(store)} changeInputPostText={store.changeInputPostText.bind(store)} inputPostText={state.inputPostText}  />}></Route> */}
                                {/* <Route path='profile' element={<Profile postsData={state.profilePage.postsData} dispatch={store.dispatch.bind(store)} inputPostText={state.profilePage.inputPostText}  />}></Route> */}

                                <Route path='profile' element={<Profile store={store} />}></Route>

                                <Route path='messages/' element={<Messages contactData={state.messagePage.contactData} />}>
                                    {/* <Route path='*' element={<Dialog textMessageData={state.messagePage.textMessageData} inputMessageText={state.messagePage.inputMessageText} addMessageText={store.addMessageText.bind(store)} changeInputMessageText={store.changeInputMessageText.bind(store)} />}></Route> */}
                                    {/* <Route path='*' element={<Dialog textMessageData={state.messagePage.textMessageData} inputMessageText={state.messagePage.inputMessageText} dispatch={store.dispatch.bind(store)} />}></Route> */}

                                    <Route path='*' element={<DialogContainer store={store} />}></Route>
                                </Route>
                            </Route>
                        )
                    )
                } />
            </React.StrictMode>
        </Provider>
    );
}
rerenderEntireTree(store.getState());
// store.subscribe(() => {
//     rerenderEntireTree(store.getState());
// });



