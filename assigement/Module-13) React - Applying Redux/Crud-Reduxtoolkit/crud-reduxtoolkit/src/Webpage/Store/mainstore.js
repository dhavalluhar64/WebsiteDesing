import { configureStore } from "@reduxjs/toolkit"

import registrationSlice from "./Slice/registrationSlice"

import productsSlice from "./Slice/productsSlice"



const Store = configureStore({

  reducer: {

    login: registrationSlice,
    product: productsSlice
  }
})


export default Store