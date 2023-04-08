import * as React from 'react';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import AppNavigation from './navigation/AppNavigation';
import {Provider} from 'react-redux';
import {store} from 'src/redux';

export default function App() {
    return (
        <Provider store={store}>
            <FlipperAsyncStorage />
            <AppNavigation />
        </Provider>
    );
}
