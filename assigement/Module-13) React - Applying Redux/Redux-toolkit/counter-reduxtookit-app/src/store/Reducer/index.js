import { createSlice } from "@reduxjs/toolkit";



const CounterSlice = createSlice({

  name: "counter",
  initialState: { value: 0 },
  reducers: {

    IncrementCount: (state) => {

      state.value += 1

    },

    DcrementCount: (state) => {

      state.value -= 1
    }
  }
})


export const { IncrementCount, DcrementCount } = CounterSlice.actions

export default CounterSlice