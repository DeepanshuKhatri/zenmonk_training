import React, { useState } from "react";
// import {add, deleter} from './features/todo/arrSlice'
import { addTask,deleteTask } from './redux/taskSlice'
// import List from './components/List'
import { Input } from "antd";
import data from "./user.js";
import { Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Todolist from "./Todolist.jsx";
// import Search from './components/Search'

const App = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  function onChange(e) {
    console.log(task)
  }
  function onSearch(e) {
    return console.log(e);
  }
  return (
    <div>
      {/* <Search/> */}
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={(e) => onChange(e)}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.value ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={data}
      />
      <Input onChange={(e) => setTask(e.target.value)} />

      {/* <button onClick={()=>dispatch(add())}>Add</button>
      <button onClick={()=> dispatch(deleter())}>Delete</button> */}
      {/* <List/> */}

      <Todolist />
    </div>
  );
};

export default App;
