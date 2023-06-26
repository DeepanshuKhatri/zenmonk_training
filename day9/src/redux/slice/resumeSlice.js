import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    resumes:[]
}

export const resumeSlice = createSlice({
    name:"resume",
    initialState:initialState,
    reducers:{
        addResume: (state, action)=>{
            state.resumes.push(action.payload)
        }
    }
})

export const {addResume} = resumeSlice.actions;
export default resumeSlice.reducer;