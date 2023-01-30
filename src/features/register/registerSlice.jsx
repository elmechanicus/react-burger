import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from '../../utils/constants';


const initialState = {
  userInfo: {
    email: "",
    name: "",
  },
  accessToken: "",
  refreshToken: "",
  status: null,
  error: null,
}


export const getUserInfo = createAsyncThunk(
  'userInfo/getUserInfo',
  async ({email, password, name}, {rejectWithValue, dispatch}) => {
    try {
      const res = await fetch(`${URL}auth/register`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          "email": email,
          "password": password,
          "name": name
        }),
      })
      if (!res.ok) { throw new Error(`Упс! Что-то пошло не так... ошибка: ${res.status}`); }
      const data = await res.json();
      return dispatch(setUserInfo(data.user), setRefreshToken(data.refreshToken), setAccessToken(data.accessToken));
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
)


export const registerUserSlice = createSlice({
  name: 'registerUser',
  initialState,
  redusers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload.user;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload.refreshToken;
    },
    setAccessToken: (state, action) =>
    {
      state.accessToken = action.payload.accessToken;
    }
  },
  extraReducers: {
    [getUserInfo.pending]: (state) => { 
      state.status = 'loading';
      state.error = null;
    },
    [getUserInfo.fulfilled]: (state) => { 
      state.status = 'loading';
      state.error = null;
    },
    [getUserInfo.rejected]: (state, action) => { 
      state = {};
      state.status = 'rejected';
      state.error = action.payload;
      alert(state.error);
    },
  }
})

export const { setUserInfo, setAccessToken, setRefreshToken } = registerUserSlice.actions
export default registerUserSlice.reducer