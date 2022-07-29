import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from '../../utils/constants';

const initialState = {
  ingredients: [],
  status: null,
  error: null,
  
}

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (_, { rejectWithValue, dispatch}) => {
    try {
        const response = await fetch(`${URL}ingredients`, {
            headers: { "Content-Type": "application/json" }
        });
      if (!response.ok) { throw new Error(`Упс! Что-то пошло не так... ошибка: ${response.status}`); }
        const data = await response.json();
        return dispatch(setIngredients(data));
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
    
  }
)

export const burgerIngredientsSlice = createSlice({
  name: 'burgerIngredients',
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients = action.payload.data;
    }
  },
  extraReducers: {
    [fetchIngredients.pending]: (state) => { 
      state.status = 'loading';
      state.error = null;
      console.log('Загрузка...');
    },
    [fetchIngredients.fulfilled]: (state) => {
      state.status = 'resolved';
      console.log('Загрузка завершена!');
    },
    [fetchIngredients.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
      console.log(state.error);
    },
  },
})

export const { setIngredients } = burgerIngredientsSlice.actions
export default burgerIngredientsSlice.reducer