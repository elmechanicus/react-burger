import { configureStore } from "@reduxjs/toolkit";
import burgerConstructorSlice from "../features/burgerConstructor/burgerConstructorSlice";
import burgerIngredientsSlice from "../features/burgerIngredients/burgerIngredientsSlice";
import ingredientsDetailsSlice from "../features/ingredientsDetails/ingredientsDetailsSlice";
import orderDetailsSlice from "../features/orderDetails/orderDetailsSlice";
import popupSlice from "../features/popup/popupSlice";
import registerSlice from '../features/register/registerSlice'


export const store = configureStore({
  reducer: {
    burgerConstructor: burgerConstructorSlice,
    burgerIngredients: burgerIngredientsSlice,
    ingredientsDetails: ingredientsDetailsSlice,
    orderDetails: orderDetailsSlice,
    popup: popupSlice,
    registerUser: registerSlice,
  },
})