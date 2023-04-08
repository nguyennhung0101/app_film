import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slice/user';
const createDebugger = require('redux-flipper').default;

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
    middleware: getDefaultMiddleware =>
        __DEV__
            ? getDefaultMiddleware({serializableCheck: false}).concat(
                  createDebugger(),
              )
            : getDefaultMiddleware({
                  serializableCheck: false,
              }),
});
