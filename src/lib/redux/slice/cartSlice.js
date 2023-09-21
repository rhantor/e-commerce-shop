const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  initialState: {
    cartTotalItem: 0,
    cartDetails: [],
  },
  name: "cartSlice",
  reducers: {
    addToCart(state, action) {
      const { cartDetails } = state;

      if (state.cartTotalItem === 0) {
        state.cartTotalItem += 1;
        let cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
          category: action.payload.category,
          name: action.payload.name,
        };
        cartDetails.push(cart);
      } else {
        state.cartTotalItem += 1;
        let check = false;
        cartDetails.map((item, key) => {
          if (item.id === action.payload.id) {
            cartDetails[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          state.cartTotalItem + 1;
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
            category: action.payload.category,
            name: action.payload.name,
          };
          state.cartDetails.push(_cart);
        }
      }
    },
    removeToCart(state, action) {
      state.cartTotalItem =
        state.cartTotalItem -
        state.cartDetails.find((item) => item.id === action.payload.id)
          .quantity;
      // // products: state.products.map((product) => {
      // //   if (product.id === action.payload.id) {
      // //     return {
      // //       ...product,
      // //       quantity: product.quantity + action.payload.quantity,
      // //     };
      // //   }
      // //   return product;
      // // }),
      state.cartDetails = state.cartDetails.filter(
        (cart) => cart.id !== action.payload.id
      );
    },
    increamentQuantity(state, action) {
      state.cartTotalItem++;
      state.cartDetails.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
      });
    },
    decreamentQuantity(state, action) {
      state.cartTotalItem >= 0 && state.cartTotalItem--;
      state.cartDetails.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity -= 1;
        }
      });
    },
  },
});

export const {
  addToCart,
  removeToCart,
  increamentQuantity,
  decreamentQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
