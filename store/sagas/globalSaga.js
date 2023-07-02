import { takeEvery, put, select } from 'redux-saga/effects';
import { keys } from 'lodash';
import getSymbolFromCurrency from 'currency-symbol-map';

import { GLOBAL_ACTION_TYPES } from '@store/actions/globalActions';
import {
  setBankDetails,
  setAllRates,
  setSelectedRates,
  setCurrencies,
  setCurrency
} from '@store/globalSlice';

const getGlobalState = (state) => state.global;

const getCurrencyData = (ratesMap) => {
  const currencyNames = new Intl.DisplayNames(['en'], { type: 'currency' });
  const currencyCodes = keys(ratesMap);
  const currencyData = {};
  currencyCodes.forEach((currencyCode) => {
    currencyData[currencyCode] = {
      extendedDisplayName: `${currencyCode} - ${currencyNames.of(
        currencyCode
      )}`,
      displayName: currencyNames.of(currencyCode),
      symbol: getSymbolFromCurrency(currencyCode),
    };
  });
  return currencyData;
};

export function* fetchStartUpData(action) {
  try {
    const { bankDetailsData, allRatesData } = action.payload;
    const { selectedMode, selectedCurrency } = yield select(getGlobalState);

    const bankDetailsMap = {};
    bankDetailsData.forEach((bank) => {
      bankDetailsMap[bank.bankCode] = bank;
    });

    yield put(setBankDetails(bankDetailsMap));
    yield put(setAllRates(allRatesData));

    if ('BUY' === selectedMode) {
      yield put(setSelectedRates(allRatesData.buyingRates[selectedCurrency]));
      yield put(setCurrencies(getCurrencyData(allRatesData.buyingRates)));
    } else {
      yield put(setSelectedRates(allRatesData.sellingRates[selectedCurrency]));
      yield put(setCurrencies(getCurrencyData(allRatesData.sellingRates)));
    }
  } catch (e) {
    console.error(e);
    yield put({ type: 'TODO_FETCH_FAILED' });
  }
}

export function* handleCurrencyChangeEvent(action) {
    const { currencyCode } = action.payload;
    yield put(setCurrency(currencyCode));
}

export default function* rootSaga() {
  yield takeEvery(GLOBAL_ACTION_TYPES.FETCH_STARTUP_DATA, fetchStartUpData);
  yield takeEvery(GLOBAL_ACTION_TYPES.ON_CURRENCY_CHANGE_EVENT, handleCurrencyChangeEvent);
}
