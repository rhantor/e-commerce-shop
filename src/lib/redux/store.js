import cartSlice from "./slice/cartSlice";
import favSlice from "./slice/favouriteSlice";
import filterSlice from "./slice/filterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartSlice,
    searchFilter: filterSlice,
    favourite: favSlice,
  },
});

export default store;
