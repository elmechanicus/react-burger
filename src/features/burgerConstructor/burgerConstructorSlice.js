import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  selectedIngredients: [],
}

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      state.selectedIngredients.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.selectedIngredients = state.selectedIngredients.filter((item) => item.constructorId !== action.payload);
    },
    clearConstructor: (state) => {
      state.selectedIngredients.length = 0;
    }
  },
})

export const { addIngredient, removeIngredient, clearConstructor } = burgerConstructorSlice.actions
export default burgerConstructorSlice.reducer