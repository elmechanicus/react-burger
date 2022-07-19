import { configureStore } from "@reduxjs/toolkit";
import burgerConstructorSlice from "../features/burgerConstructor/burgerConstructorSlice";
import ingredientsDetailsSlice from "../features/ingredientsDetails/ingredientsDetailsSlice";
import popupSlice from "../features/popup/popupSlice";


export const store = configureStore({
  reducer: {
    burgerConstructor: burgerConstructorSlice,
    ingredientsDetails: ingredientsDetailsSlice,
    popup: popupSlice,
  },
})