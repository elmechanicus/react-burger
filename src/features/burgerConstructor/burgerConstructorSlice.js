import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  selectedIngredients: [],
}

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      state.selectedIngredients.push({ ...action.payload, constructorId: (Math.random() * 100000).toFixed(0) })

    },
    removeIngredient: (state, action) => {
      state.selectedIngredients = state.selectedIngredients.filter((item) => item.constructorId !== action.payload)
    }
  },
})

export const { addIngredient, removeIngredient } = burgerConstructorSlice.actions
export default burgerConstructorSlice.reducer