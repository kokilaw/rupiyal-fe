import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCurrency: 'USD',
  selectedBankCode: 'BOC',
  selectedMode: 'BUY',
  allRates: [],
  selectedRates: [],
  currencies: {},
  bankDetails: {},
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
    setBankCode: (state, action) => {
      state.selectedMode = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setSelectedRates: (state, action) => {
      state.selectedRates = action.payload;
    },
    setAllRates: (state, action) => {
      state.allRates = action.payload;
    },
    setBankDetails: (state, action) => {
      state.bankDetails = action.payload;
    },
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
  }
});

export const {
  setCurrency,
  setBankCode,
  setMode,
  setBankDetails,
  setAllRates,
  setSelectedRates,
  setCurrencies,
} = globalSlice.actions;
export const selectGlobalState = (state) => state.global;
export default globalSlice.reducer;
