import {configureStore} from "@reduxjs/toolkit"
import appSlice from "../features/appSlice"
import groceriesSlice from "../features/groceriesSlice"
import cartSlice from "../features/cartSlice"
import authSlice from "../features/authSlice"

export const store=configureStore({
    reducer:{
        app:appSlice,
        groceriesApp:groceriesSlice,
        allcart:cartSlice,
        authentication:authSlice
    }
})