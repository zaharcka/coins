import React from 'react';

import createStore from './store';
import {Provider} from "react-redux";
import MainPage from './components/MainPage/index.js';



const store = createStore();



function App() {

    return (
        <Provider store={store}>
        <MainPage />
        </Provider>
    );
}

export default App;
