import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from '../../utils/constants';

const initialState = {
  // orderIds: [],
  orderNumber: null,
  status: null,
  error: null,
}

export const getOrderNumber = createAsyncThunk(
  'orderNumber/getOrderNumber',
  async (orderIds, {rejectWithValue, dispatch}) => {
    try {
      const res = await fetch(`${URL}orders`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"ingredients": orderIds}),
      })
      if (!res.ok) { throw new Error(`Упс! Что-то пошло не так... ошибка: ${res.status}`); }
      const data = await res.json();
      return dispatch(setOrderNumber(data.order.number));
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    
  }
)

export const orderDetailsSlice = createSlice({
  name: 'orderDetails',
  initialState,
  reducers: {
    setOrderNumber: (state, action) => {
      state.orderNumber = action.payload;
    },
  },
  extraReducers: {
    [getOrderNumber.pending]: (state) => { 
      state.status = 'loading';
      state.error = null;
    },
    [getOrderNumber.fulfilled]: (state) => { 
      state.status = 'resolved';
    },
    [getOrderNumber.rejected]: (state, action) => { 
      state.status = 'rejected';
      state.error = action.payload;
      alert(state.error);
    },
  }
})

export const { setOrderNumber } = orderDetailsSlice.actions
export default orderDetailsSlice.reducer