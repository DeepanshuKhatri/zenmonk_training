import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTask} from  "../redux/tasksSlice";
import Search from '../components/Search';
import data from '../user'
const AddTodo = () => {
    const [value, setValue] = useState('');
    const [name, setName] = useState("");

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
        console.log(name)

		
        if(value==""){
            return;
        }

		dispatch(
			addTask({
				task: value,
                id: name
			})
		);

		setValue("");
	};

	return (
		<div>
            <Search setName={setName}/>
			<input
				type="text"
				
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit}>
				Save
			</button>
		</div>
	);
}

export default AddTodo