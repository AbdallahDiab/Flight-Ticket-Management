import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addTicket,
  deleteTicket,
  editTicket,
  getSingleTicket,
  getTickets,
} from "./thunks";

interface Ticket {
  code: string;
  capacity: number;
  date: Date;
  id: number;
}

interface TicketsState {
  tickets: Ticket[];
  singleTicket: Ticket | any;
  isLoading: boolean;
  error: string | null;
}

const initialState: TicketsState = {
  tickets: [],
  singleTicket: {
    code: "",
    capacity: null,
    date: "",
    id: null,
  },
  isLoading: false,
  error: null,
};
const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get Ticket Cases
      .addCase(getTickets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tickets = action.payload;
      })
      .addCase(getTickets.rejected, (state, action) => {
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "An unexpected error occurred";
        }
        state.isLoading = false;
      })

      // Add Ticket Cases
      .addCase(addTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTicket.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addTicket.rejected, (state, action) => {
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "An unexpected error occurred";
        }
        state.isLoading = false;
      })

      // Edit Ticket Cases
      .addCase(editTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTicket.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(editTicket.rejected, (state, action) => {
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "An unexpected error occurred";
        }
        state.isLoading = false;
      })

      // Get Single Ticket Cases
      .addCase(getSingleTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleTicket.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleTicket = action.payload;
      })
      .addCase(getSingleTicket.rejected, (state, action) => {
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "An unexpected error occurred";
        }
        state.isLoading = false;
      })

      // Delete Ticket Cases
      .addCase(deleteTicket.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTicket.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTicket.rejected, (state, action) => {
        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "An unexpected error occurred";
        }
        state.isLoading = false;
      });
  },
});
export default ticketSlice.reducer;
