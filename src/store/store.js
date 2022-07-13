import { configureStore } from "@reduxjs/toolkit";
import burgerConstructorSlice from "../features/burgerConstructor/burgerConstructorSlice";


export const store = configureStore({
  reducer: {
    burgerConstructor: burgerConstructorSlice,
  },
})