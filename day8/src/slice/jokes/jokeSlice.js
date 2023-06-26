import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchJoke from "../../service/joke.service";

export const getJoke = createAsyncThunk(
    'showJoke',
    async(thunkAPI)=>{
        const response = await fetchJoke();
        console.log(true)
        console.log(response.data);
        return response.data
    }
)

export const jokeSlice = createSlice({
    name:"joke",
    initialState:[],
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getJoke.pending,(state, action)=>{
            action.pending = true;
            // state.push("loading")
        })
        builder.addCase(getJoke.fulfilled, (state, action)=>{
            action.pending= false;
            state.push(action.payload);
            console.log(state)
        })
        builder.addCase(getJoke.rejected,(state, action)=>{
            action.pending=false;
            console.log("error");
            action.error='Api Access Denied'
        })
        
    }
})
export default jokeSlice.reducer;