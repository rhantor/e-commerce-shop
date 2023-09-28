const { createSlice } = require("@reduxjs/toolkit");

const favSlice = createSlice({
  initialState: {
    favouriteItem: [],
  },
  name: "favouriteSlice",
  reducers: {
    addFavouriteItem(state, action) {
      const itemExists = state.favouriteItem.find(
        (item) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.favouriteItem.unshift({ ...action.payload, alreadyExist: true });
      } else {
        // Modify the existing item
        itemExists.alreadyExist = true;
      }
    },
    removeFavouriteItem(state, action) {
      console.log(action.payload);
      state.favouriteItem = state.favouriteItem.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export default favSlice.reducer;

export const { addFavouriteItem, removeFavouriteItem } = favSlice.actions;
