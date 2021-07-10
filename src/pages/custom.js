import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../redux/reducers/rootReducer';
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import MarDeUranoApp from '../components/MarDeUranoApp';
import { CustomApp } from '../components/CustomApp';

const Custom = ({ location }) => {

    const custom = location.search.substring(1, location.search.length);
    console.log('custom', custom);
    let store;

    if (typeof window !== `undefined`) {
        store = createStore(
            rootReducer,
            load(),
            composeWithDevTools(applyMiddleware(thunk, save()))
        );
    } else {
        store = createStore(
            rootReducer,
            composeWithDevTools(applyMiddleware(thunk))
        );
    }

    return (
        <Provider store={store}>
            <MarDeUranoApp>
                <CustomApp></CustomApp>
            </MarDeUranoApp>
        </Provider>
    );
}


export default Custom;