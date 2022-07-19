import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredientInfo: {},
}

export const ingredientsDetailsSlice = createSlice({
  name: 'ingredientsDetails',
  initialState,
  reducers: {
    viewIngredientDetails: (state, action) => {
      state.ingredientInfo = action.payload;
    }
  },
})

export const { viewIngredientDetails } = ingredientsDetailsSlice.actions
export default ingredientsDetailsSlice.reducer