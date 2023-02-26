import React, { useEffect, useState } from "react";

import "./styles/style.css";

function TodoList() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [newTodoText, setNewTodoText] = useState("");
  let checked = false;
  let elements = [];

  useEffect(() => {
    //if (!localStorage.getItem('elements')) localStorage.setItem('elements', '[]');
    if (!localStorage.getItem('markedArr')) localStorage.setItem('markedArr', '[]');

    const data = JSON.parse(localStorage.getItem("todos"));
    // const markedArr = JSON.parse(localStorage.getItem('markedArr'));
    //elements = JSON.parse(localStorage.getItem('elements'));
    setTodos(data);
    // elements.forEach(element => {
    //   if (markedArr.find((id) => id === element.id)) {
    //     element.checked = true;
    //   }
    // });
    setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodoText.length > 0) {
      setTodos((todos) => [...todos, { id: Date.now(), text: newTodoText}]);
      setNewTodoText("");
    }

  };

  const checkedHandler = (e) => {
    //const elementSetChecked = new Set();
    //const elementSetUnChecked = new Set();
    const set = new Set();
    const markedArr = JSON.parse(localStorage.getItem('markedArr'));

    
    //console.log(e.target.checked);
    if (e.target.checked) {
      //elementSetChecked.add(e.target);
      //elements = JSON.parse(localStorage.getItem('elements'));
      //elements.push(e.target);

      //localStorage.setItem('elements', JSON.stringify(elements));
      markedArr.forEach((item) => set.add(item));
      set.add(e.target.getAttribute('id'));
      localStorage.setItem('markedArr', JSON.stringify(Array.from(set)));
    }else{
      //elementSetUnChecked.add(e.target);
      //elements = JSON.parse(localStorage.getItem('elements'));
      //elements = elements.filter((item) => item !== e.target)
      //localStorage.setItem('elements', JSON.stringify(elements));
      const newArr = markedArr.filter((item) => item !== e.target.id)
      localStorage.setItem('markedArr', JSON.stringify(newArr));
    }
    //localStorage.setItem('elementUnChecked', JSON.stringify(Array.from(elementSetUnChecked)));
    //localStorage.setItem('elementChecked', JSON.stringify(Array.from(elementSetChecked)));
  }

  const handleNewTodoTextChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const handleDeleteTodo = (id) => {
    const markedArr = JSON.parse(localStorage.getItem('markedArr'));
    const newArr = markedArr.filter((item) => Number(item) !== Number(id));
    localStorage.setItem('markedArr', JSON.stringify(newArr));
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input
          type="text"
          value={newTodoText}
          onChange={handleNewTodoTextChange}
          placeholder="Enter new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label><input  id={todo.id} onChange={checkedHandler} type='checkbox' txt={todo.text}/>{todo.text}</label><button className={JSON.parse(localStorage.getItem('markedArr')).find((id) => id === todo.id) ? 'red' : 'green'} onClick={() => handleDeleteTodo(todo.id)} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
