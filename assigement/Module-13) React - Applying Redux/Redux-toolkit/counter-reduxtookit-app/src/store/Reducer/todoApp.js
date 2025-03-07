import { createSlice } from "@reduxjs/toolkit";



const TodoSlice = createSlice({

  name: "Todo",
  initialState: { add: [] },
  reducers: {

    AddTodo: (state, actions) => {

      console.log(actions)

      state.add = [...state.add, actions.payload]

    },

    EditTodo: (state, actions) => {
      console.log(state, actions)
      state.add = state.add.map((item, idx) =>
        idx === actions.payload.idx ? actions.payload.newValue : item
      );
    }
    ,

    DeleteTodo: (state, actions) => {

      console.log(state, actions)

      state.add = state.add.filter((data) => data !== actions.payload);

    }
  }

})


export const { AddTodo, DeleteTodo, EditTodo } = TodoSlice.actions

export default TodoSlice;