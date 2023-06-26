import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from '../slice/authSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import resumeReducer from '../slice/resumeSlice'


const persistConfig = {
    key:'root',
    version:1,
    storage
}

const reducers = combineReducers({
    auth:authReducer,
    resume:resumeReducer
})

const persist = persistReducer(persistConfig, reducers)
export const store = configureStore({
    reducer:persist
    // reducer:{
    //     auth:authReducer

    // }
})
export default store;
export const persister = persistStore(store);