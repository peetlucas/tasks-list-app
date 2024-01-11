import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        //editTodo
        editTodo(value, task.id);
    };
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
        <input type="text" className="todo-input" placeholder="Update task" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit" className="todo-btn">Update Task</button>
    </form>
  )
}
