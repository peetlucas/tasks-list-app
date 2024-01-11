import React, {useState, useEffect} from 'react';
import {TodoForm} from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import {Todo} from './Todo';
import {EditTodoForm} from './EditTodoForm';
uuidv4();


export const TodoWrapperLocalStorage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      setTodos(savedTodos);
    }, []);

    const addTodo = (todo) => {
        const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const toggleComplete = (id) => {
        const newTodo = todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo);
        setTodos(newTodo);
        localStorage.setItem('todos', JSON.stringify(newTodo));
    };
    
  return (
    <div>
      
    </div>
  )
}

export default TodoWrapperLocalStorage
