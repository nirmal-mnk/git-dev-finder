import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getUser = createAsyncThunk(
  "searchuser/gettingGithubUser",
  async (username, thunkApi) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const searchSlice = createSlice({
  name: "searchuser",
  initialState: {
    userData: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    deleteSearch: (state) => {
      console.log("jgjgjhgjhgjg");

      state.userData = [];
      state.isLoading = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isError = false;
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      if (action.payload !== undefined) {
        state.userData = action.payload;
        state.isLoading = false;
        state.isError = false;
      }
    },
    [getUser.rejected]: (state) => {
      state.userData = [];
      state.isLoading = false;
      state.isError = true;
    },
  },
});
export const { deleteSearch } = searchSlice.actions;
export default searchSlice.reducer;
