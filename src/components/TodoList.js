import React, { useRef, useState, useCallback, useContext } from 'react';
import { MdAdd } from 'react-icons/md';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import TodoInsert from '../components/TodoInsert';
import TodoTemplate from '../components/TodoTemplate';

const TodoListStyle = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  console.log(todos)
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <TodoListStyle>
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
    </TodoListStyle>
  );
};

// const TodoListFinal = ( menu ) => {
//   const { state, action } = useContext(TodoConsumer);

//   let response = {
//     data: {
//       articles: state.todoContent,
//     },
//   };

//   let nc = { state: { ...state }, action: { ...action } };
//   nc.state.todoContent = response.data.articles;
//   action.setTodoContent(nc);

//   const something = state.todoContent;

//   const [todos, setTodos] = useState('');
//   const nextId = useRef(1);

//   const onInsert = useCallback(text => {
//     const todo = {
//       id: nextId.current,
//       text,
//       checked: false,
//     };
//     setTodos(todos => todos.concat(todo));
//     nextId.current += 1;
//   }, []);

//   const onRemove = useCallback(id => {
//     setTodos(todos => todos.filter(todo => todo.id !== id));
//   }, []);

//   const onToggle = useCallback(id => {
//     setTodos(todos =>
//       todos.map(todo =>
//         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
//       ),
//     );
//   }, []);

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} menu={menu}>
//         {something.map((todos) => (
//           <TodoListItem></TodoListItem>
//         ))}
//       </TodoList>
//     </TodoTemplate>
//   );
// };


// Reducer (immer 적용 전)
// function todoReducer(todos, action) {
//   switch (action.type) {
//     case 'INSERT':
//       return produce(todos, draft => {
//         draft.push(action.todo);
//       }
//       );
    
//     case 'REMOVE':
//       return produce(todos, draft => {
//         const index = draft.findIndex(todo => todo.id === action.id);
//         draft.splice(index, 1);
//       }  
//       );
     
//     case 'TOGGLE':
//       return produce(todos, draft => {
//         const user = draft.findIndex(todo => todo.id === action.id);
//         draft[user].checked = !draft[user].checked;
//       }  
//       );
//     default:
//       return todos;
//   }
// }


// Reducer (immer 적용 후)
// function todoReducer(todos, action) {
//   switch (action.type) {
//     case 'INSERT':
//       return produce(todos, draft => {
//         draft.push(action.todo);
//       }
//       );

//     case 'REMOVE': // 제거
//       // { type: 'REMOVE', id: 1 }
//       // return todos.filter(todo => todo.id !== action.id);
//       return produce(todos, draft => {
//         const index = draft.findIndex(todo => todo.id === action.id);
//         draft.splice(index, 1);
//       }  
//       );
    
//     case 'TOGGLE': // 토글
//       return produce(todos, draft => {
//         const user = draft.findIndex(todo => todo.id === action.id);
//         draft[user].checked = !draft[user].checked;
//       }  
//       );

//     default:
//       return todos;
//   }
// }

export default React.memo(TodoList);
// export default React.memo(TodoListFinal);