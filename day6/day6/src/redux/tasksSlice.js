import { createSlice } from "@reduxjs/toolkit";
import data from '../user'
const initialState = {
    data:[
        {
            id:"1",
            name:"Deepanshu",
            count:0
        },
        {
            id:"2",
            name:"Uttam",
            count:0
        },
        {
            id:"3",
            name:"Prithvi",
            count:0
        }

    ],
    tasks:[]
}
export const tasksSlice = createSlice({
    name:"tasks",
    initialState:initialState,
    reducers:{
        addTask:(state, action)=>{
            let name;
            for(let i of state.data){
                if(i.id==action.payload.id){
                    i.count += 1;
                    console.log(i.count)
                    const newTask = {
                        id: action.payload.id,
                        task: action.payload.task,
                        name: i.name
                       
                    }
                    state.tasks.push(newTask)
                }
            }
        },
        
        
    }
})
export const {addTask, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;