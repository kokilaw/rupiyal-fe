import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currency: 'GBP',
  bankCode: 'BOC',
  mode: 'BUY',
  allRates: [],
  selectedRates: [],
  currencies: [],
  ratesToday: {},
  bankDetails: {},
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
    setRatesToday: (state, action) => {
      state.ratesToday = action.payload;
      if (state.mode === 'BUY') {
        state.selectedRates = action.payload.buyingRates[state.currency];
      } else {
        state.selectedRates = action.payload.sellingRates[state.currency];
      }
    },
    setBankDetails: (state, action) => {
      const bankDetailsMap = {};
      action.payload.forEach((bank) => {
        bankDetailsMap[bank.bankCode] = bank;
      });
      state.bankDetails = bankDetailsMap;
    },
  },
});

export const {
  setCurrency,
  setBankCode,
  setMode,
  setBankDetails,
  setRatesToday,
} = globalSlice.actions;
export default globalSlice.reducer;
