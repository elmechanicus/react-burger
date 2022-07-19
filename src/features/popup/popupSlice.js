import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupIngredient: {
    isPopupOpened: false,
  },
  popupOrder: {
    isPopupOpened: false,
  }
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.popupIngredient.isPopupOpened = action.payload;
    },
    closePopup: (state, action) => {
      state.popupIngredient.isPopupOpened = action.payload;
    },
    openPopupOrder: (state, action) => {
      state.popupOrder.isPopupOpened = action.payload;
    },
    closePopupOrder: (state, action) => {
      state.popupOrder.isPopupOpened = action.payload;
    },
  }
})

export const {openPopup, closePopup, openPopupOrder, closePopupOrder} = popupSlice.actions
export default popupSlice.reducer