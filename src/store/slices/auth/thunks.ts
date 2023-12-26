import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST } from "@utils";

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  password: string;
  email: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (userData: LoginPayload, { rejectWithValue }) => {
    try {
      const response = await POST({ endpoint: "login", data: userData });
      // You can save the token in localStorage here if needed
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData: RegisterPayload, thunkAPI) => {
    try {
      const response = await POST({ endpoint: "register", data: userData });

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
