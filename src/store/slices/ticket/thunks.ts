import { createAsyncThunk } from "@reduxjs/toolkit";
import { DELETE, GET, PATCH, POST } from "@utils";
import { message } from "antd";

interface TicketsPayload {
  code: string;
  capacity: number;
}
interface EditTicketsPayload {
  id: number | string | undefined;
  data: TicketsPayload;
}
interface PagenationPayload {
  page: number;
  limit: number;
}

export const getTickets = createAsyncThunk("tickets/getTickets", async () => {
  try {
    const response = await GET({ endpoint: "ticket" });
    return response;
  } catch (error: any) {
    return error.response;
  }
});

export const getSingleTicket = createAsyncThunk(
  "tickets/getSingleTicket",
  async (id: number | string | undefined) => {
    try {
      const response = await GET({ endpoint: `ticket/${id}` });
      return response;
    } catch (error: any) {
      return error.response;
    }
  }
);

export const addTicket = createAsyncThunk(
  "tickets/addTicket",
  async (userData: TicketsPayload, thunkAPI) => {
    try {
      const response = await POST({ endpoint: "ticket", data: userData });
      thunkAPI.dispatch(getTickets());
      message.success("Ticket added successfully!");
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const editTicket = createAsyncThunk(
  "tickets/editTicket",
  async (payload: EditTicketsPayload, thunkAPI) => {
    try {
      const response = await PATCH({
        endpoint: `ticket/${payload.id}`,
        data: payload.data,
      });
      thunkAPI.dispatch(getTickets());
      message.success("Ticket updated successfully!");
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const deleteTicket = createAsyncThunk(
  "tickets/deleteTicket",
  async (id: number | null, thunkAPI) => {
    try {
      const response = await DELETE({ endpoint: `ticket/${id}` });
      thunkAPI.dispatch(getTickets());
      message.success("Ticket deleted successfully!");
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
