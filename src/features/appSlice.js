import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
//   for smartphone 
export const getEcommerceData=createAsyncThunk("getEcommerceData",async()=>{
        const res=await axios.get("https://dummyjson.com/products/category/smartphones")
      try {
        return res.data;
      } catch (error) {
        return error;
      }
})

// for singlesmartphone

export const getSingleSmartphoneData=createAsyncThunk("getSingleSmartphoneData",async(phoneapi)=>{
        const res=await axios.get(phoneapi)
     return res.data;
})

// for search
export const getSearchData=createAsyncThunk("getSearchData",async(searchapi)=>{
    const res=await axios.get(searchapi)
 return res.data;
})

export const appSlice=createSlice({
    name:"e-commerce",
    initialState:{
        eProducts:[],
        isLoading:false,
        isError:false,
        singleSmartphoneData:{},
       
    },
    // for e commerce
    extraReducers:(builder)=>{
        builder.addCase(getEcommerceData.pending,(state)=>{
            state.isLoading=true;
            

        }),
        builder.addCase(getEcommerceData.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.eProducts=action.payload;
        }),
        builder.addCase(getEcommerceData.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            // console.log(action.payload);
        }),
        // getSingleSmartphoneData
   
        builder.addCase(getSingleSmartphoneData.pending,(state)=>{
            state.isLoading=true;
            

        }),
        builder.addCase(getSingleSmartphoneData.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.singleSmartphoneData=action.payload;
        }),
        builder.addCase(getSingleSmartphoneData.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            console.log(action.payload);
        }),
        // for search 
        builder.addCase(getSearchData.fulfilled,(state,action)=>{
            state.eProducts=action.payload
        })
     
    }
    
})
export default appSlice.reducer;