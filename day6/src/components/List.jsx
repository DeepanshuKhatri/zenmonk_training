import React from 'react'
import { useSelector } from 'react-redux'

const List = () => {
  const data = useSelector((state)=>state.arr.tasks);
  return (
    <div>
        {data.map((d, index)=>{

            return <h1 key={index}>{d}</h1>
        })
        }
    </div>
  )
}

export default List