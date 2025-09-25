import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const res = await axios.get(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    return res.data;
  }
);

const countrySlice = createSlice({
  name: "countries",
  initialState: {
    list: [],
    filtered: [],
    status: "idle",
    error: null,
  },
  reducers: {
    filterByRegion: (state, action) => {
      state.filtered =
        action.payload === "All"
          ? state.list
          : state.list.filter((c) => c.region === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
        state.filtered = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { filterByRegion } = countrySlice.actions;
export default countrySlice.reducer;
