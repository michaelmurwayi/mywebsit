import {configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import reducer from './reducer';

const store = configureStore({
    reducer: {
        reducer,
    },
    preloadedState: initialState,
})


export default store