const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    searchProduct: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { searchProduct } = filterSlice.actions;
