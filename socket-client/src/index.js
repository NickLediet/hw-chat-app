import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import chatReducer from './reducers/chatReducer'

const store = createStore(
  chatReducer  
)

ReactDOM.render(
  <Provider store={store}>
    {/* Tell the router to use our "enhanced" history */}
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
