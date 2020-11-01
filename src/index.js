import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {userState} from './reducers/authenticator.js';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';

const store= createStore(combineReducers({userState: userState}),applyMiddleware(logger));


ReactDOM.render(
	
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
