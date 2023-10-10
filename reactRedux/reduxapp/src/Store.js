import { configureStore } from "@reduxjs/toolkit"; // Correct import

import rootReducer from "./reducers/index";

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
