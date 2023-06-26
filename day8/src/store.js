import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from './slice/product/productSlice'
import countryReducer from "./slice/country/countrySlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import jokeReducer from './slice/jokes/jokeSlice'


const persistConfig = {
    key: 'root',
    version:1,
    storage,
    blacklist:["product"]
  }

const reducers = combineReducers({
    product: productReducer,
    country:countryReducer,
    joke:jokeReducer
})
   
  const persist = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer:persist
})
export const persister=persistStore(store);