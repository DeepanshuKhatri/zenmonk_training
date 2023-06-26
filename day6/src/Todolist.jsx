import React from 'react'
import Search from './components/Search'
import { useSelector } from 'react-redux'

const Todolist = () => {
  const data = useSelector((state)=> state.assigned)||[]
  return (
    <div>
        {/* <Search/> */}
        <ul>

        {data.map((e)=> <li>dfas</li>)}
        </ul>
    </div>
  )
}

export default Todolist