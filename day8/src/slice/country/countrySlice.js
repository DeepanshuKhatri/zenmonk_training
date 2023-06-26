import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchCountry from "../../service/country.service";

export const getCountry = createAsyncThunk(
    'showCountry',
    async(thunkAPI)=>{
        const response = await fetchCountry();
        console.log(true)
        console.log(response.data);
        return response.data
    }
)

export const countrySlice = createSlice({
    name:"country",
    initialState:[],
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getCountry.fulfilled, (state, action)=>{
            state.push(...action.payload)
            console.log(state)
        })
        builder.addCase(getCountry.pending,(state, action)=>{
            action.pending = true;
            // state.push("loading")
        })
        builder.addCase(getCountry.rejected,(state, action)=>{
            action.pending=false;
            console.log("error");
            action.error='Api Access Denied'
        })

    }
    
})
export default countrySlice.reducer;