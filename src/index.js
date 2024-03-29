import store from "./redux/reduxStore";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, } from "react-router-dom";
import { Messages } from './components/Messages/Messages'
import { DialogContainer } from './components/Messages/Dialog/DialogContainer';
import { Provider } from "react-redux";
import { UsersContainer } from "./components/Users/UsersContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { TestHook } from "./components/Music/testHook";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <Provider store={store}>
            {/* <React.StrictMode> */}
            <RouterProvider router={
                createBrowserRouter(
                    createRoutesFromElements(
                        <Route path='/*' element={<App />} errorElement={<ErrorPage />}>
                            {/* <Route path='profile' element={<Profile postsData={state.postsData} addNewPost={store.addNewPost.bind(store)} changeInputPostText={store.changeInputPostText.bind(store)} inputPostText={state.inputPostText}  />}></Route> */}
                            {/* <Route path='profile' element={<Profile postsData={state.profilePage.postsData} dispatch={store.dispatch.bind(store)} inputPostText={state.profilePage.inputPostText}  />}></Route> */}

                            <Route path='profile/' element={<ProfileContainer />}>
                                <Route path=':userId' element={<ProfileContainer />}></Route>
                                <Route path='me' element={<ProfileContainer />}></Route>
                            </Route>
                            <Route path='testHook/' element={<TestHook />}></Route>

                            <Route path='messages/' element={<Messages contactData={state.messagePage.contactData} />}>
                                {/* <Route path='*' element={<Dialog textMessageData={state.messagePage.textMessageData} inputMessageText={state.messagePage.inputMessageText} addMessageText={store.addMessageText.bind(store)} changeInputMessageText={store.changeInputMessageText.bind(store)} />}></Route> */}
                                {/* <Route path='*' element={<Dialog textMessageData={state.messagePage.textMessageData} inputMessageText={state.messagePage.inputMessageText} dispatch={store.dispatch.bind(store)} />}></Route> */}

                                <Route path='*' element={<DialogContainer />}></Route>
                            </Route>
                            <Route path="users/" element={<UsersContainer />}></Route>
                        </Route>
                    )
                )
            } />
            {/* </React.StrictMode> */}
        </Provider>
    );
}
rerenderEntireTree(store.getState());
// store.subscribe(() => {
//     rerenderEntireTree(store.getState());
// });



