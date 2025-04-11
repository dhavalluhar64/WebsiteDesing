

import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../Store/userSlice"
import ReadSlice from "../Store/ReadSlice"


const Store = configureStore({

  reducer: {

    userSlice: userSlice,
    readSlice: ReadSlice

  }
})



export default Store