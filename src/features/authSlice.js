import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"auth",
    initialState:{
       isLogin:false,
       isLogout:false,
    },
    reducers:{
        login:(state,action)=>{
          let token=localStorage.getItem("token")
           state.isLogin=true;
           state.isLogin=action.payload;
        },
        logout:(state)=>{
          state.isLogin=false;
          state.isLogout=true;
          // state.isLogout=action.payload
        }
    }
})
export const {login,logout}=authSlice.actions;
export default authSlice.reducer;