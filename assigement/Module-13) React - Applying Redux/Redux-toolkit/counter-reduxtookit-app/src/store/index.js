
import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "./Reducer"
import TodoSlice from "./Reducer/todoApp"




const Store = configureStore({

  reducer: {

    counter: CounterSlice.reducer,
    Todo: TodoSlice.reducer
  },

  devTools: {
    trace: true,
    traceLimit: 10
  }
})

export default Store