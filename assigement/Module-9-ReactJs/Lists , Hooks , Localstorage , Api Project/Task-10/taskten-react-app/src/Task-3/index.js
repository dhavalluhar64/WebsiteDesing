
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const Store = configureStore({

  reducer: {

    count: counterSlice.reducer

  }
})

export default Store