
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios"


export const Registrastion = createAsyncThunk("Registrastion", async (loginsend, { rejectWithValue }) => {

  try {

    const res = await axios.post(`http://localhost:3000/users`, loginsend)

    return res.data

  } catch (error) {

    return rejectWithValue(error.message)
  }
})


export const loginSuccess = createAsyncThunk("loginSucess", async (emailId, { rejectWithValue }) => {

  try {
    const res = await axios.get(`http://localhost:3000/users?email=${emailId}`)
    return res.data
  } catch (error) {

    return rejectWithValue(error.message);
  }
})

export const EditProfile = createAsyncThunk("EditProfile", async ({ EditId, EditData }, { rejectWithValue }) => {

  try {

    const res = await axios.put(`http://localhost:3000/users/${EditId}`, EditData)

    return res.data

  } catch (error) {
    return rejectWithValue(error.message)
  }

})

const registrationSlice = createSlice({

  name: "registrastion",
  initialState: { login: [], loading: false, error: null },
  reducers: {

    loginPending: (state, action) => {

      state.loading = true
      state.error = action.payload
    },

    loginfulfeild: (state, action) => {

      state.loading = false;
      state.login = action.payload
    },

    loginrejected: (state, action) => {

      state.error = action.payload
      state.loading = false
    }
  },

  extraReducers: (buildre) => {

    buildre.addCase(Registrastion.pending, (state, action) => {

      state.loading = true

    }),

      buildre.addCase(Registrastion.fulfilled, (state, action) => {

        state.loading = false;
        state.login = action.payload
      }),

      buildre.addCase(Registrastion.rejected, (state, action) => {

        state.error = action.payload
        state.loading = false
      }),

      buildre.addCase(loginSuccess.fulfilled, (state, action) => {

        state.loading = false
        state.login = action.payload

      }),

      buildre.addCase(loginSuccess.rejected, (state, action) => {

        state.error = action.payload;
        state.loading = false
      }),

      buildre.addCase(EditProfile.pending, (state, action) => {

        state.loading = true
      }),

      buildre.addCase(EditProfile.fulfilled, (state, action) => {

        state.loading = false;
        state.login = state.login.map((user) => {
          user.id === action.payload.id ? action.payload : user
        })
      }),

      buildre.addCase(EditProfile.rejected, (state, action) => {

        state.error = action.payload;
        state.loading = false;
      })

  }
})

export const { loginPending, loginfulfeild, loginrejected } = registrationSlice.actions;


export default registrationSlice.reducer;