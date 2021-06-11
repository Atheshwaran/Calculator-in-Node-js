
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { incrementSagaA, incrementSagaB, incrementWicketSagaA, incrementWicketSagaB, incrementBallsSagaA, incrementBallsSagaB, incRunsRateSagaA, incRunsRateSagaB, showResult } from "./Saga/Saga"
import allreducer from './Reducers/CombineReducer';
import { Provider } from 'react-redux';


const sagaMiddleware = createSagaMiddleware();   // Creating middleware

const store = createStore(               // Storing all reducers and middlewares in the redux store. 
  allreducer,
  applyMiddleware(sagaMiddleware)
)

// Starting the saga middlewares to listen for particular actions.

sagaMiddleware.run(incrementSagaA);
sagaMiddleware.run(incrementSagaB);
sagaMiddleware.run(incrementWicketSagaA);
sagaMiddleware.run(incrementWicketSagaB);
sagaMiddleware.run(incrementBallsSagaA);
sagaMiddleware.run(incrementBallsSagaB);
sagaMiddleware.run(incRunsRateSagaA);
sagaMiddleware.run(incRunsRateSagaB);
sagaMiddleware.run(showResult);


ReactDOM.render(<Provider store={store} > <App /> </Provider>, document.getElementById('root'));

