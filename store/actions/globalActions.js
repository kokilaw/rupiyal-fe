import { createAction } from '@reduxjs/toolkit';

const GLOBAL_ACTION_TYPES = {
  FETCH_STARTUP_DATA: 'FETCH_STARTUP_DATA',
  ON_MODE_CHANGE_EVENT: 'ON_MODE_CHANGE_EVENT',
  ON_CURRENCY_CHANGE_EVENT: 'ON_CURRENCY_CHANGE_EVENT',
};

const fetchStartUpDataAction = createAction(
  GLOBAL_ACTION_TYPES.FETCH_STARTUP_DATA,
  (payload) => ({ payload })
);

const onModeChangeEventAction = createAction(
  GLOBAL_ACTION_TYPES.ON_MODE_CHANGE_EVENT,
  (payload) => ({ payload })
);

const onCurrencyChangeEventAction = createAction(
  GLOBAL_ACTION_TYPES.ON_CURRENCY_CHANGE_EVENT,
  (payload) => ({ payload })
);

export {
  GLOBAL_ACTION_TYPES,
  fetchStartUpDataAction,
  onModeChangeEventAction,
  onCurrencyChangeEventAction,
};
