import React, { useRef, useState, useCallback, useContext } from 'react';
import { MdAdd } from 'react-icons/md';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import { TodoConsumer } from '../contexts/TodoContent';
import TodoInsert from '../components/TodoInsert';

const TodoTemplateStyle = styled.div`
    width: 512px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 4px;
    overflow: hidden;
  
    .app-title {
      background: #22b8cf;
      color: white;
      height: 4rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .content {
      background: white;
    }
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateStyle>
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
    </TodoTemplateStyle>
  );
};

export default TodoTemplate;