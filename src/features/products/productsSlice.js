import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

// Tourist Projects Tutorial -
const url = 'https://course-api.com/react-tours-project'

export const getProductsItems = createAsyncThunk(
  'products/getProductsItems',
  () => {
    return fetch(url)
      .then((resp) => resp.json())
      .catch((error) => console.log(error))
  }
)

const initialState = {
  productsItems: [],
  isLoading: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProductsItems.pending]: (state) => {
      state.isLoading = true
    },
    [getProductsItems.fulfilled]: (state, action) => {
      console.log(action)
      state.productsItems = action.payload
      state.isLoading = false
    },
    [getProductsItems.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

export default productsSlice.reducer
