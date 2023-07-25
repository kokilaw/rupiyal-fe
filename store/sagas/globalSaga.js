import { takeEvery, put, select } from 'redux-saga/effects';
import { keys } from 'lodash';
import getSymbolFromCurrency from 'currency-symbol-map';

import {
  GLOBAL_ACTION_TYPES,
  onMainVariableUpdatedEventAction,
} from '@store/actions/globalActions';
import {
  setBankDetails,
  setAllRates,
  setSelectedRates,
  setCurrencies,
  setCurrency,
  setBankCode,
  setMode,
} from '@store/globalSlice';
import { getCountryFlagEmoji } from '@common/utils/countryUtils';
import { CURRENCY_MODE } from '@common/constants';

const getGlobalState = (state) => state.global;

const getCurrencyData = (ratesMap) => {
  const currencyNames = new Intl.DisplayNames(['en'], { type: 'currency' });
  const currencyCodes = keys(ratesMap);
  const currencyData = {};
  currencyCodes.forEach((currencyCode) => {
    const countryCode = currencyCode.slice(0, -1);
    currencyData[currencyCode] = {
      currencyCode,
      extendedDisplayName: `${currencyCode} - ${currencyNames.of(
        currencyCode
      )}`,
      displayName: currencyNames.of(currencyCode),
      symbol: getSymbolFromCurrency(currencyCode),
      countryCode,
      countryFlagEmoji: getCountryFlagEmoji(countryCode),
    };
  });
  return currencyData;
};

export function* fetchStartUpData(action) {
  try {
    const { allRatesData } = action.payload;
    const { banks: bankDetailsData } = allRatesData;
    const { selectedMode, selectedCurrency } = yield select(getGlobalState);

    const bankDetailsMap = {};
    bankDetailsData.forEach((bank) => {
      bankDetailsMap[bank.bankCode] = bank;
    });

    yield put(setBankDetails(bankDetailsMap));
    yield put(setAllRates(allRatesData));

    if (CURRENCY_MODE.BUY === selectedMode) {
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
  yield put(onMainVariableUpdatedEventAction());
}

export function* handleBankChangeEvent(action) {
  const { bankCode } = action.payload;
  yield put(setBankCode(bankCode));
  yield put(onMainVariableUpdatedEventAction());
}

export function* handleModeChangeEvent(action) {
  const { mode } = action.payload;
  yield put(setMode(mode));
  yield put(onMainVariableUpdatedEventAction());
}

export function* handleOnMainVariableUpdatedEvent() {
  yield put(setSelectedRates([]));
  const { selectedMode, selectedCurrency, allRates } = yield select(getGlobalState);
  if (CURRENCY_MODE.BUY === selectedMode) {
    yield put(setSelectedRates(allRates.buyingRates[selectedCurrency]));
  } else {
    yield put(setSelectedRates(allRates.sellingRates[selectedCurrency]));
  }
}

export default function* rootSaga() {
  yield takeEvery(GLOBAL_ACTION_TYPES.FETCH_STARTUP_DATA, fetchStartUpData);
  yield takeEvery(
    GLOBAL_ACTION_TYPES.ON_CURRENCY_CHANGE_EVENT,
    handleCurrencyChangeEvent
  );
  yield takeEvery(
    GLOBAL_ACTION_TYPES.ON_BANK_CHANGE_EVENT,
    handleBankChangeEvent
  );
  yield takeEvery(
    GLOBAL_ACTION_TYPES.ON_MODE_CHANGE_EVENT,
    handleModeChangeEvent
  );
  yield takeEvery(
    GLOBAL_ACTION_TYPES.ON_MAIN_VARIABLE_UPDATED_EVENT,
    handleOnMainVariableUpdatedEvent
  );
}
