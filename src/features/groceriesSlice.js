import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const groceriesData=createAsyncThunk("groceriesData",async()=>{
    const res=await axios.get("https://dummyjson.com/products/category/groceries")
    try {
        return res.data;
    } catch (error) {
        return error;
    }
})
export const laptopssData=createAsyncThunk("laptopssData",async()=>{
    const res=await axios.get("https://dummyjson.com/products/category/laptops")
    try {
        return res.data;
    } catch (error) {
        return error;
    }
})
//sports-accessories 
export const skincareData=createAsyncThunk("skincareData",async()=>{
    const res=await axios.get("https://dummyjson.com/products/category/sports-accessories")
    try {
        return res.data;
    } catch (error) {
        return error;
    }
})
export const homeDecorationData=createAsyncThunk("homeDecorationData",async()=>{
    const res=await axios.get("https://dummyjson.com/products/category/home-decoration")
    try {
        return res.data;
    } catch (error) {
        return error;
    }
})
export const fragranceData=createAsyncThunk("fragranceData",async()=>{
    const res=await axios.get("https://dummyjson.com/products/category/fragrances")
    try {
        return res.data;
    } catch (error) {
        return error;
    }
})

export const groceriesSlice=createSlice({
    name:"groceries",
    initialState:{
        groceries:[],
        isLoading:false,
        isError:false,
        laptop:[],
        skincares:[],
        homeDecoration:[],
        fragrances:[]
    },
extraReducers:(builder)=>{
    builder.addCase(groceriesData.pending,(state)=>{
        state.isLoading=true;
    }),
    builder.addCase(groceriesData.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.groceries=action.payload;
    }),
    builder.addCase(groceriesData.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        console.log(action.payload);
        
    }),

    // laptopdata 
    builder.addCase(laptopssData.pending,(state)=>{
        state.isLoading=true;
    }),
    builder.addCase(laptopssData.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.laptop=action.payload;
    }),
    builder.addCase(laptopssData.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        console.log(action.payload);
        
    }),
    // skincares
    builder.addCase(skincareData.pending,(state)=>{
        state.isLoading=true;
    }),
    builder.addCase(skincareData.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.skincares=action.payload;
    }),
    builder.addCase(skincareData.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        console.log(action.payload);
        
    }),
    // homedecoration 
    builder.addCase(homeDecorationData.pending,(state)=>{
        state.isLoading=true;
    }),
    builder.addCase(homeDecorationData.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.homeDecoration=action.payload;
    }),
    builder.addCase(homeDecorationData.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        console.log(action.payload);
        
    }),
    // fragrance 
    builder.addCase(fragranceData.pending,(state)=>{
        state.isLoading=true;
    }),
    builder.addCase(fragranceData.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.fragrances=action.payload;
    }),
    builder.addCase(fragranceData.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        console.log(action.payload);
        
    })
}
})
export default groceriesSlice.reducer;