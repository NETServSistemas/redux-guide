import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'


import rootReducer from "./root-reducer";


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer );
export const persistor = persistStore(store)
   


