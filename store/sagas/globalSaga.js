import { call, takeEvery, put, select } from 'redux-saga/effects';
import Axios from 'axios';

import { GLOBAL_ACTION_TYPES } from '@store/actions/globalActions';
import {
  setBankDetails,
  setAllRates,
  setSelectedRates,
} from '@store/globalSlice';

const getGlobalState = (state) => state.global;

const callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

const getCurrencyData = (ratesMap) => {
  let currencyNames = new Intl.DisplayNames(['en'], { type: 'currency' });
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

export function* fetchStartUpData() {
  try {
    let bankDetailsResult = yield call(() =>
      callAPI({
        url: 'https://mocki.io/v1/a098da89-d72d-40f8-adee-d59c9be911ef',
      })
    );

    const bankDetailsMap = {};
    bankDetailsResult.data.forEach((bank) => {
      bankDetailsMap[bank.bankCode] = bank;
    });

    yield put(setBankDetails(bankDetailsMap));

    const ratesTodayResult = yield call(() =>
      callAPI({
        url: 'https://mocki.io/v1/483e7b0f-62a3-40ca-90a0-a75d3457c0b6',
      })
    );

    const ratesTodayData = ratesTodayResult.data;
    yield put(setAllRates(ratesTodayData));

    const { selectedMode, selectedCurrency } = yield select(getGlobalState);

    if ('BUY' === selectedMode) {
      yield put(setSelectedRates(ratesTodayData.buyingRates[selectedCurrency]));
    } else {
      yield put(
        setSelectedRates(ratesTodayData.sellingRates[selectedCurrency])
      );
    }
  } catch (e) {
    console.error(e);
    yield put({ type: 'TODO_FETCH_FAILED' });
  }
}

export default function* rootSaga() {
  yield takeEvery(GLOBAL_ACTION_TYPES.FETCH_STARTUP_DATA, fetchStartUpData);
}
