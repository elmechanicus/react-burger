import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  selectedIngredients: [],
  isBun: false,
}

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      if (action.payload.type === 'bun') state.isBun = true;
      state.selectedIngredients.push({ ...action.payload, constructorId: (Math.random() * 100000).toFixed(0) })

    },
    removeIngredient: (state, action) => {
      state.selectedIngredients = state.selectedIngredients.filter((item) => item.constructorId !== action.payload)
    }
  },
})

export const { addIngredient, removeIngredient } = burgerConstructorSlice.actions
export default burgerConstructorSlice.reducer