import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { accReducer } from './Reducer/accountReducer.js'
import { bnsReducer } from './Reducer/bonusReducer.js'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'
import axios from 'axios'
import { Provider } from 'react-redux'



const myStore=createStore(combineReducers({
  account:accReducer,
  bonus:bnsReducer
},applyMiddleware(logger,thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={myStore}>
      <App />
    </Provider>
  </>,
)
