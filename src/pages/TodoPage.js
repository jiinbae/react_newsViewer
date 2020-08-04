import React from 'react';
import TopBar from '../components/TopBar';
import TodoListFinal from '../components/TodoList';


const TodoPage = ({ match }) => {
  const menu = match.params || 'todolist';
  return (
    <>
      <TopBar />
      <div className="content">
        <TodoListFinal menu={menu} />
        {/* <TodoList /> */}
      </div>
    </>
  );
};

export default TodoPage;