import React, { useRef, useState, useCallback, useContext } from 'react';
import { MdAdd } from 'react-icons/md';
// import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import { TodoConsumer } from '../contexts/TodoContent';
import TodoInsert from '../components/TodoInsert';
import TodoTemplate from '../components/TodoTemplate';
import TodoList from '../components/TodoList';

const TodoListFinal = ( menu ) => {
    const { state: {todoContent}, action: {setTodoContent} } = useContext(TodoConsumer);
    const nextId = useRef(1);
  
    const [todos, setTodos] = useState('');
    const nextId = useRef(1);
  
    const onInsert = useCallback(text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodoContent(todo => todoContent.concat(todo));
      nextId.current += 1;
    }, []);
  
    const onRemove = useCallback(id => {
      setTodoContent(todoContent => todoContent.filter(todo => todo.id !== id));
    }, []);
  
    const onToggle = useCallback(id => {
      setTodoContent(todoContent =>
        todoContent.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    }, []);
  
    return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todoContent} onRemove={onRemove} onToggle={onToggle} menu={menu}>
        </TodoList>
      </TodoTemplate>
    );
  };
  
export default React.memo(TodoListFinal);