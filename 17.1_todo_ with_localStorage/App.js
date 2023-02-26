import React, { useEffect, useState, useReducer } from "react";

import "./styles/style.css";

const todoReducer = (state, action) => {
  if (action.type === 'FILL_TODO_ARR') {
    return { todos: [...action.data], newTodoText: state.newTodoText };
  }else if (action.type === 'NEW_TODO_TEXT') {
    return { todos: state.todos, newTodoText: action.newTodoText };
  }else {
    return { todos: [{ id: 0, text: "" }], newTodoText: "" };
  }
  
};

function TodoList() {

  const [todoState, dispatchTodo] = useReducer(todoReducer, {
    value: [{ id: 0, text: "" }],
    newTodoText: ""
  });

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      dispatchTodo({type: 'FILL_TODO_ARR', data:data})
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todoState.todos.length]);

  const addTodo = () => {
    dispatchTodo({type: 'FILL_TODO_ARR', data:[...todos, { id: Date.now(), text: newTodoText }], newTodoText: ''});
  };

  const handleNewTodoTextChange = (event) => {
    dispatchTodo({ type: 'NEW_TODO_TEXT', newTodoText: event.target.value});
  };

  const handleDeleteTodo = (id) => {
    setTodos((todos) => {todos.filter((todo) => todo.id !== id)});
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input
          type="text"
          value={todoState.newTodoText}
          onChange={handleNewTodoTextChange}
          placeholder="Enter new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todoState.todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" />
              {todo.text}
            </label>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
