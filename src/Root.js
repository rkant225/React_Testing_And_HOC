import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Redux/reducers';
import thunk from 'redux-thunk';
import reduxPromise  from 'redux-promise';


const Root = ({children, initialState={}}) =>{
    // const store = createStore(rootReducer,initialState, applyMiddleware(thunk));
    const store = createStore(rootReducer,initialState, applyMiddleware(reduxPromise));
    return(
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default Root;