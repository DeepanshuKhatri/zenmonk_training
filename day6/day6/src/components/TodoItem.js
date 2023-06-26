import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/tasksSlice'

const TodoItem = ({id, title, name}) => {
    
  return (
    <div>
        <li>
            {title} {name}
        </li>
    </div>
  )
}

export default TodoItem