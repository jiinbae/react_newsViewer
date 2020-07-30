import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import newsReduxRefac from './modules/newsReduxRefac';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  newsReduxRefac
})
// const store = createStore(rootReducer, composeWithDevTools(), applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <BrowserRouter>
    {/* <Provider store={store} */}
      <App />
    {/* </Provider> */}
  </BrowserRouter>,
document.getElementById('root')
);

serviceWorker.unregister();

export default rootReducer;