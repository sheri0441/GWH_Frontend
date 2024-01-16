import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  name: string;
  quantity: number;
  price: number;
  imageURL: string;
  id: string;
}

interface User {
  name: string;
  email: string;
  imageURL: string;
  id: string;
  cart: Cart[];
}

interface InitialState {
  isLogin: boolean;
  user: User;
}

const initialState: InitialState = {
  isLogin: false,
  user: {
    name: "Mosh",
    email: "hello@gmail.com",
    imageURL: "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    id: "asdf1521561asd",
    cart: [
      {
        name: "Apple",
        quantity: 1,
        price: 1.2,
        imageURL:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        id: "124",
      },
      {
        name: "Apple",
        quantity: 1,
        price: 1.2,
        imageURL:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        id: "1245",
      },
      {
        name: "Apple",
        quantity: 1,
        price: 1.2,
        imageURL:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        id: "1243",
      },
      {
        name: "Apple",
        quantity: 1,
        price: 1.2,
        imageURL:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        id: "1246",
      },
    ],
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isLogin = false;
    },
    logIn: (state) => {
      state.isLogin = true;
    },
    filterById: (state, action: PayloadAction<string>) => {
      state.user.cart = state.user.cart.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { logOut, logIn, filterById } = loginSlice.actions;

export default loginSlice.reducer;
