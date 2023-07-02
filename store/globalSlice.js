import { createSlice, createAction } from '@reduxjs/toolkit';

import { keys } from 'lodash';
import getSymbolFromCurrency from 'currency-symbol-map';

const initialState = {
  selectedCurrency: 'INR',
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
  },
});

export const {
  setCurrency,
  setBankCode,
  setMode,
  setBankDetails,
  setAllRates,
  setSelectedRates,
} = globalSlice.actions;
export default globalSlice.reducer;
