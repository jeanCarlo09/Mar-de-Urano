import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../redux/reducers/rootReducer';
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import MarDeUranoApp from '../components/MarDeUranoApp';
import ShopLayout from '../components/layouts/ShopLayout';

const Custom = () => {

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
                <ShopLayout headerTop="visible">
                    <div>
                        <h1>Hi</h1>
                    </div>
                </ShopLayout>
            </MarDeUranoApp>
        </Provider>
    );
}


export default Custom;