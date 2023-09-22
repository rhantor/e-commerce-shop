import cartSlice from "./slice/cartSlice";
import filterSlice from "./slice/filterSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartSlice,
    searchFilter: filterSlice,
  },
});

export default store;
