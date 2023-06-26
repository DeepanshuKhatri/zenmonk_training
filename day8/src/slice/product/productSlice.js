import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  fetchProduct from "../../service/product.service";

export const getProduct = createAsyncThunk(
    'showProduct',
    async (thunkAPI)=>{
        const response = await fetchProduct();
        console.log(response.data.products)
        return response.data.products;
    }
)
export const productSlice = createSlice({
    name:"product",
    initialState:[],
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(getProduct.fulfilled, (state, action)=>{
            state.push(...action.payload)
            
        })
         builder.addCase(getProduct.rejected,(state, action)=>{
            action.pending=false;
            console.log("error");
            action.error='Api Access Denied'
        })
        builder.addCase(getProduct.pending,(state, action)=>{
            action.pending = true;
            // state.push("loading")
        })
    }
})
// export const {showProduct} = productSlice.actions;
export default productSlice.reducer;