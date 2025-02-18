import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  stocksData: {},
  isLoading: false,
  hasError: false,
};

export const fetchStocks = createAsyncThunk(
  "stocksData/fetchStocks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo"
      );
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const stocksSlice = createSlice({
  name: "stocksData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStocks.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(fetchStocks.fulfilled, (state, action) => {
      console.log("Fetched Data:", action.payload);
      state.isLoading = false;
      state.hasError = false;
      state.stocksData = action.payload;
      console.log("stocks", state.stocksData);
    });
    builder.addCase(fetchStocks.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export default stocksSlice.reducer;
