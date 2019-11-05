import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
//import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/lib/integration/react';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers'

import Logout from './components/Logout/Logout'


const persistConfig = {
    key: 'root',
    storage: storageSession,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };
   
const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    pReducer,
    composeEnhancer(applyMiddleware(thunk)),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);
const persistor = persistStore(store);

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <PersistGate loading={<Logout />} persistor={persistor}>
            <App />
        </PersistGate>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
