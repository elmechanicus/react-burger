import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPopupOpened: false,
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isPopupOpened = action.payload;
      console.log(action.payload);
    },
    closePopup: (state, action) => {
      state.isPopupOpened = action.payload;
    },
  }
})

export const {openPopup, closePopup} = popupSlice.actions
export default popupSlice.reducer