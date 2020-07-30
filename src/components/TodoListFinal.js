// import React, { useRef, useState, useCallback, useContext } from 'react';
// import { MdAdd } from 'react-icons/md';
// // import { List } from 'react-virtualized';
// import TodoListItem from './TodoListItem';
// import styled from 'styled-components';
// import { TodoConsumer } from '../contexts/TodoContent';
// import TodoInsert from '../components/TodoInsert';
// import TodoTemplate from '../components/TodoTemplate';
// import TodoList from '../components/TodoList';

// const TodoListFinal = ( menu ) => {
//     const { state: {todoContent}, action: {setTodoContent} } = useContext(TodoConsumer);
//     const nextId = useRef(1);
  
//     const [todos, setTodos] = useState('');
//     const nextId = useRef(1);
  
//     const onInsert = useCallback(text => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false,
//       };
//       setTodoContent(todo => todoContent.concat(todo));
//       nextId.current += 1;
//     }, []);
  
//     const onRemove = useCallback(id => {
//       setTodoContent(todoContent => todoContent.filter(todo => todo.id !== id));
//     }, []);
  
//     const onToggle = useCallback(id => {
//       setTodoContent(todoContent =>
//         todoContent.map(todo =>
//           todo.id === id ? { ...todo, checked: !todo.checked } : todo,
//         ),
//       );
//     }, []);
  
//     return (
//       <TodoTemplate>
//         <TodoInsert onInsert={onInsert} />
//         <TodoList todos={todoContent} onRemove={onRemove} onToggle={onToggle} menu={menu}>
//         </TodoList>
//       </TodoTemplate>
//     );
//   };
  
// export default React.memo(TodoListFinal);

import React, { useRef, useCallback, useContext } from 'react';
import TodoContext from '../contexts/TodoContent';
import TodoInsert from '../components/TodoInsert';
import TodoTemplate from '../components/TodoTemplate';
import TodoList from '../components/TodoList';
import produce from 'immer';

const TodoListFinal = ( menu ) => {
    const { state: {todoContents}, action: {setTodoContent} } = useContext(TodoContext);
    const nextId = useRef(1);

    const onInsert = useCallback(text => {
    
        // text를 받아서 새로운 객체 생성.
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        
        // 만들어진 새로운 객체를 원래 리스트에 push한 새 리스트 만들기. (immer 사용)
        const nextContents = produce(
            todoContents, draft => {
                draft.push(todo)
            }
        )
        // setTodoContent(todo => todo.concat(todoContent));

        // 그 리스트를 가진 형태의 context의 object 형태로 만든다.
        const nextState = {
            state: {
                nextContents
            },
            action: {
                action: { setTodoContent: setTodoContent },
            }
        }
        // context에 저장.
        setTodoContent(nextState);    
        nextId.current += 1;
    }, [setTodoContent, todoContents]);
  
    const onRemove = useCallback(id => {
    // setTodoContent(todoContent => todoContent.filter(todo => todo.id !== id));
    const nextContents = produce(
        todoContents, draft => {
            const index = draft.findIndex(todoContents => todoContents.id === id);
        draft.splice(index, 1);
        }
    );

    const nextState = {
        state: {
            nextContents
        },
        action: {
            action: { setTodoContent: setTodoContent },
        }
    }
    setTodoContent(nextState);
    }, [setTodoContent, todoContents]);

    const onToggle = useCallback(id => {
      // setTodoContent(todoContent =>
      //   todoContent.map(todo =>
      //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      //   ),
      // );
    const nextContents = produce(
        todoContents, draft => {
            const user = draft.findIndex(todoContent => todoContent.id === id);
            draft[user].checked = !draft[user].checked;
        }
    ); 
    const nextState = {
        state: {
            nextContents
        },
        action: {
            action: { setTodoContent: setTodoContent },
        }
    }
    setTodoContent(nextState);
    }, [setTodoContent, todoContents]);
      
    // let value = {
    //   data: {
    //     todoData: state.todoContents,
    //   },
    // };
  
    // let nc = { state: { ...state }, action: { ...action } };
    // nc.state.todoContents = response.data.todoData;
    // action.setTodoContent(nc);
  
    // const todoData = state.todoContents;
  
    // const [todos, setTodos] = useState('');
    // const nextId = useRef(1);
  
    // const onInsert = useCallback(text => {
    //   const todo = {
    //     id: nextId.current,
    //     text,
    //     checked: false,
    //   };
    //   setTodoContent(todo => todoContent.concat(todo));
    //   nextId.current += 1;
    // }, []);
  
    // const onRemove = useCallback(id => {
    //   setTodoContent(todoContent => todoContent.filter(todo => todo.id !== id));
    // }, []);
  
    // const onToggle = useCallback(id => {
    //   setTodoContent(todoContent =>
    //     todoContent.map(todo =>
    //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //     ),
    //   );
    // }, []);
  
    return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todoContents} onRemove={onRemove} onToggle={onToggle} menu={menu}>
        </TodoList>
      </TodoTemplate>
    );
  };
  
export default React.memo(TodoListFinal);