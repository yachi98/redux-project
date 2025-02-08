import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  stocksData: [],
  isLoading: false,
  hasError: boolean,
};

export const fetchStocks = createAsyncThunk(
  "stocksData/fetchStocks",
  async () => {
    const response = await axios.get(
      "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo"
    );
    console.log(response.data);
    return response.data;
  }
);

const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStocks.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(fetchStocks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.stocks = action.payload;
    });
    builder.addCase(fetchStocks.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export const { setStocks } = stocksSlice.reducer;
