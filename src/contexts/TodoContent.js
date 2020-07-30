import React, { createContext, useRef, useCallback, useState } from 'react';
import produce from 'immer';

const initialValue = {
    state: {
        todoContents: [{
        id: 1,
        text: 'todolist',
        checked: false
        }],
    },
    action: { setTodoContent: () => {} },
};

const TodoContext = createContext(initialValue);

const TodoProvider = ({ children }) => {
  const [todoContent, setTodoContent] = useState(initialValue);
  
  const value = { // 이걸 value로 넘겨줘야 되는데 만약 todoContent를 넘겨주면 setNewsContent: () => {}로 작동.
      ...todoContent,
      action: {
          setTodoContent: setTodoContent
        }
  }

  return (
    <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
  );
};

const { Consumer: TodoConsumer } = TodoContext;

export { TodoProvider, TodoConsumer };

export default TodoContext;

// todocontext에서 state의 produce 넣기.