import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const productsGet = createAsyncThunk("productsGet", async (data, { rejectWithValue }) => {


  try {
    const res = await axios.get(`http://localhost:3000/products`)
    return res.data
  } catch (error) {

    return rejectWithValue(error.message)
  }
})


export const Updateproduct = createAsyncThunk("Updateproduct", async ({ EditId, Edit }, { rejectWithValue }) => {

  try {
    const res = await axios.put(`http://localhost:3000/products/${EditId}`, Edit)

    return res.data
  } catch (error) {

    return rejectWithValue(error.message)
  }
})


export const CreateData = createAsyncThunk("CreateData", async (createData, { rejectWithValue }) => {

  try {
    const res = await axios.post(`http://localhost:3000/products`, createData)

    console.log(res.data)
    return res.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})




export const Deleteproduct = createAsyncThunk("", async (id, { rejectWithValue }) => {

  try {
    const res = await axios.delete(`http://localhost:3000/products/${id}`)
    return res.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})



const productsSlice = createSlice({

  name: 'products',
  initialState: { products: [], loading: false, error: null },

  reducers: {

    productLoading: (state, action) => {

      state.loading = true
      state.error = null;
    },
    productfulfild: (state, action) => {

      state.loading = false;
      state.products = action.payload
    },
    productreject: (state, action) => {

      state.error = action.payload;
      state.loading = false
    }
  },
  extraReducers: (builder) => {

    builder.addCase(productsGet.pending, (state, action) => {

      state.loading = true
      state.error = null;
    }),

      builder.addCase(productsGet.fulfilled, (state, action) => {

        state.loading = false;
        state.products = action.payload
      }),

      builder.addCase(productsGet.rejected, (state, action) => {

        state.error = action.payload;
        state.loading = false
      }),

      builder.addCase(Updateproduct.fulfilled, (state, action) => {

        state.loading = false

        state.products = state.products.map((pro) =>
          pro.id === action.payload.id ? action.payload : pro
        );

      }),

      builder.addCase(CreateData.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload

        console.log(state, action)
      }),
      builder.addCase(Deleteproduct.fulfilled, (state, action) => {

        state.products = state.products.filter((prod) => prod.id !== action.payload.id)

        console.log(state, action)
      })
  }
})


export const { productLoading, productfulfild, productreject } = productsSlice.actions

export default productsSlice.reducer