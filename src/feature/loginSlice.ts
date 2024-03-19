import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../model/Cart";
import axios from "axios";

interface User {
  name: string;
  email: string;
  imageURL: string;
  id: string;
  cart: Cart[];
}

interface InitialState {
  isLoading: boolean;
  isLogin: boolean;
  hasError: boolean;
  user: User;
}

export const updateCart = createAsyncThunk(
  "/user/cart",
  async (cart: Cart[]) => {
    const cartList: Cart[] = cart;

    const response = await axios({
      url: import.meta.env.VITE_API_URL + "/user/cart",
      method: "PUT",
      data: {
        cart: cartList,
      },
      headers: {
        Authorization: `bearer ${window.localStorage.getItem("token")}`,
      },
    });

    console.log(response);

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  }
);

const initialState: InitialState = {
  isLoading: false,
  isLogin: false,
  hasError: false,
  user: {
    name: "",
    email: "",
    imageURL: "",
    id: "",
    cart: [],
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.isLogin = false;
      localStorage.removeItem("token");
    },
    logIn: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
        image: string;
        id: string;
      }>
    ) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.imageURL = action.payload.image;
      state.user.id = action.payload.id;
      state.isLogin = true;
    },

    setCartInfo: (state, action: PayloadAction<Cart[]>) => {
      state.user.cart = action.payload;
    },

    toggleHasError: (state) => {
      state.hasError = !state.hasError;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(updateCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        const cart = action.payload;
        state.user.cart = cart;
        state.isLoading = false;
      })
      .addCase(updateCart.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { logOutUser, logIn, setCartInfo, toggleHasError } =
  loginSlice.actions;

export default loginSlice.reducer;
