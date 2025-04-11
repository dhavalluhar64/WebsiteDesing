import { createAsyncThunk, createNextState, createSlice } from "@reduxjs/toolkit"


import axios from "axios"


export const Ragistration = createAsyncThunk("Ragistration", async (postData, { rejectWithValue }) => {

  try {
    const response = await axios.post(`https://rainflowweb.com/demo/react_test/new_user.php`, postData, { headers: {} })
    return response.data
  } catch (error) {

    console.log("Login Error Details :", error.response?.data || error.message)
    return rejectWithValue(error.message)
  }

})



export const LoginUser = createAsyncThunk("LoginUser", async (postData, { rejectWithValue }) => {

  try {
    const res = await axios.post(`https://rainflowweb.com/demo/react_test/login.php`, postData, { headers: {} })

    return res.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})


const userSlice = createSlice({

  name: "userSlice",
  initialState: {

    userLogin: [], user: null, loading: false, Errors: null
  },

  reducers: {

    logout: (state) => {

      state.user = null
      localStorage.removeItem("userData")
    }

  },

  extraReducers: (builder) => {

    builder.addCase(Ragistration.pending, (state, action) => {

      state.loading = true
      state.Errors = null

    }),
      builder.addCase(Ragistration.fulfilled, (state, action) => {

        state.loading = false
        state.userLogin = action.payload


      }),
      builder.addCase(Ragistration.rejected, (state, action) => {

        state.loading = false
        state.Errors = action.payload


      }),

      builder.addCase(LoginUser.pending, (state, action) => {

        state.loading = true
        state.Errors = null

      }),
      builder.addCase(LoginUser.fulfilled, (state, action) => {

        state.loading = false
        state.user = action.payload.data
        localStorage.setItem("userData", JSON.stringify(action.payload.data))

      }),
      builder.addCase(LoginUser.rejected, (state, action) => {

        state.loading = false
        state.Errors = action.payload

      })



  }


})


export const { logout } = userSlice.actions


export default userSlice.reducer