import React from 'react';
import {store, createStore, applyMiddleware} from 'redux';
import Provider from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducer';

const store =createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
);