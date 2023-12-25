import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, register } from "./thunks";

interface User {
  id: string;
  username: string;
  // Add other relevant user fields
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    // You can add more reducers as needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        state.isLoading = false;
        state.isLoggedIn = true;
        window.location.href = "/flights";
      })
      .addCase(register.rejected, (state, action) => {
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "An unexpected error occurred";
        }
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        state.isLoading = false;
        state.isLoggedIn = true;
        window.location.href = "/flights";
      })
      .addCase(login.rejected, (state, action) => {
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "An unexpected error occurred";
        }
        state.isLoading = false;
        state.isLoggedIn = false;
      });
  },
});
export default authSlice.reducer;
