import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIngredients: ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733d1", "60d3b41abdacab0026a733cf", "60d3b41abdacab0026a733d3", "60d3b41abdacab0026a733c9"],
}

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      state.selectedIngredients.push(action.payload.id)
    },
  },
})

export const { addIngredient } = burgerConstructorSlice.actions
export default burgerConstructorSlice.reducer