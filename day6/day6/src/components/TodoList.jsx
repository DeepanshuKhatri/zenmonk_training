import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state)=>{
        return state.tasks.tasks;
    })
  return (
    <div>
       <ul>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.task} name={todo.name}/>
			))}
		</ul>

    </div>
  )
}

export default TodoList