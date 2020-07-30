import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import TodoPage from './pages/TodoPage';
import { NewsProvider } from './contexts/NewsContent';
import { TodoProvider } from './contexts/TodoContent';

const App = (props) => {
  return (
    <>
      <NewsProvider>
        <div>
          <Route path={["/news/:country/:category?", '/', '/news']} component={NewsPage} exact={true} />
        </div>
      </NewsProvider>

      <TodoProvider>
        <div>
        <Route path="/todoList" component={TodoPage}/>
        </div>
      </TodoProvider>
    </>
  );
};

export default App;