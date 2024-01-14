import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  user: {
    name: "Mosh",
    email: "hello@gmail.com",
    imageURL: "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    id: "asdf1521561asd",
  },
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: [],
});

export default login.reducer;
