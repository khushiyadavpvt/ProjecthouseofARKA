import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./CartReducer";
import userReducer from "./UserReducer"

export default configureStore({

    reducer:{
        cart:cartReducer,
        user: userReducer,
    }
})