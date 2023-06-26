import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Search from './components/Search'
import TaskShow from './components/TaskShow'
const App = () => {
  return (
    <div>
      {/* <Search/> */}
      <AddTodo/>
      <br></br>
      <TaskShow/>
      <TodoList/>
    </div>
  )
}

export default App