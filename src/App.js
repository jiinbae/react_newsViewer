import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import TodoPage from './pages/TodoPage';
import { NewsProvider } from './contexts/NewsContent';
import { TodoProvider } from './contexts/TodoContent';
import { createStore } from 'redux';
import newsReducer from './store/newsData';
import { Provider } from 'react-redux';

import './App.css';

const store = createStore(newsReducer);

const App = (props) => {
  console.log('[SUPER]')
  return (
    <>
    <Provider store = {store}>
      <NewsProvider>
        <div>
          <Route path={["/news/:country/:category?", '/', '/news']} component={NewsPage} exact={true} />
        </div>
      </NewsProvider>
    </Provider>

      <TodoProvider>
        <div>
        <Route path="/todoList" component={TodoPage}/>
        </div>
      </TodoProvider>
    </>
  );
};

export default App;