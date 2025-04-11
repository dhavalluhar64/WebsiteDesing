import { combineSlices, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"




export const GetDataTable = createAsyncThunk("GetDataTable", async (_, { rejectWithValue }) => {

  try {
    const res = await axios.get(`https://rainflowweb.com/demo/react_test/user_list.php`)
    if (res.status !== 200) {

      throw new Error("Someown Error in ReadData : ", res.status)
    }
    return res.data.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})



export const GetDataTableEdit = createAsyncThunk("GetDataTableEdit", async (UpdateData, { rejectWithValue }) => {

  try {
    const res = await axios.post(`https://rainflowweb.com/demo/react_test/update_user.php`, UpdateData)
    if (res.status !== 200) {

      throw new Error("Someown Error in EditData : ", res.status)
    }

    console.log(res.data)
    return res.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})


export const DeleDatatable = createAsyncThunk("DeleDatatable", async (deleId, { rejectWithValue }) => {

  try {
    const res = await axios.get(`https://rainflowweb.com/demo/react_test/delete_user.php?user_id=${deleId}`)

    console.log(res.data)
    return res.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})



const ReadSlice = createSlice({
  name: "readSlice",
  initialState: { readData: [], loading: false, error: null },
  reducers: {


  },

  extraReducers: (builder) => {

    builder.addCase(GetDataTable.pending, (state) => {

      state.loading = true
      state.error = null

    }),
      builder.addCase(GetDataTable.fulfilled, (state, action) => {

        state.readData = action.payload
        state.loading = false

      }),
      builder.addCase(GetDataTable.rejected, (state, action) => {

        state.error = action.payload
        state.loading = false
      }),

      builder.addCase(GetDataTableEdit.pending, (state, action) => {

        state.error = null
        state.loading = true
      }),

      builder.addCase(GetDataTableEdit.fulfilled, (state, action) => {

        state.readData = action.payload
        state.loading = false
      }),
      builder.addCase(GetDataTableEdit.rejected, (state, action) => {

        state.error = action.payload
        state.loading = false
      }),

      builder.addCase(DeleDatatable.fulfilled, (state, action) => {

        state.loading = false
        state.readData = state.readData.filter((read) => read.id !== action.payload.id)
      })
  }
})



export default ReadSlice.reducer