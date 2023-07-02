import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: 'GBP',
  bankCode: 'BOC',
  mode: 'BUY',
  allRates: [],
  selectedRates: [],
  currencies: [],
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setBankCode: (state, action) => {
      state.bankCode = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setSelectedRates: (state, action) => {
      state.selectedRates = action.payload;
    },
  },
});

export const { setCurrency, setBankCode, setMode, setSelectedRates } =
  globalSlice.actions;
export default globalSlice.reducer;
