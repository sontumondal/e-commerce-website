import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? localStorage.getItem("totalAmount")
    : 0;
const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? localStorage.getItem("totalQuantity")
    : 0;

const setitemfunc = (items, totalAmount) => {
  localStorage.setItem("cart", JSON.stringify(items));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};
export const cartSlice = createSlice({
  name: "cartdata",
  initialState: {
    cart: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
    shipingfee: 50,
  },
  reducers: {
    addtocartdata: (state, action) => {
      let { amount, product } = action.payload;
      const extraIngredients = action.payload.extraIngredients;

      let cartproducts = {
        id: product.id,
        title: product.title,
        image: product.thumbnail,
        price: product.price,
        amount,
        totalPrice: product.price,

        extraIngredients: product.extraIngredients,
      };

      const existingItem = state.cart.find((item) => item.id === product.id);
      if (!existingItem) {
        state.cart.push(cartproducts);
        state.totalQuantity++;
      } else if (
        existingItem &&
        JSON.stringify(existingItem.extraIngredients) ===
          JSON.stringify(extraIngredients)
      ) {
        state.totalQuantity++;
        existingItem.amount++;
      } else {
        const value = JSON.parse(localStorage.getItem("cartItems"));
        let index = value.findIndex((s) => s.id === existingItem.id);
        const newValue = {
          id: existingItem.id,
          title: existingItem.title,
          image: existingItem.thumbnail,
          price: existingItem.price,
          amount,
          totalPrice: existingItem.price,
          extraIngredients: extraIngredients,
        };
        state.cartItems.splice(index, 1, newValue);
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + Number(item.amount),
          0
        );
      }
      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.amount),
        0
      );
      setitemfunc(
        state.cart.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.amount) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.amount--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalAmount = state.cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.amount),
        0
      );

      setitemfunc(
        state.cart.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});
export const { addtocartdata, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

// deleteCartItem: (state, action) => {
//   const id = action.payload;
//   const existingItem = state.cart.find((item) => item.id === id);
//   if (existingItem) {
//     state.cart = state.cart.filter((item) => item.id !== id);
//     state.totalQuantity = state.totalQuantity - existingItem.amount;

//   }
//   // state.totalAmount = state.cartItems.reduce(
//   //   (total, item) => total + Number(item.price) * Number(item.amount),
//   //   0
//   // );
//   setitemfunc(
//     state.cart.map((item) => item),
//     state.totalAmount,
//     state.totalQuantity

//   );
// },
