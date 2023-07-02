'use client';

import { useRef } from 'react';
import { store } from '@store';
import { setRatesToday, setBankDetails } from '@store/globalSlice';

export default function PreLoader({ ratesTodayData, bankDetailsData }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    loaded.current = true;
    store.dispatch(setBankDetails(bankDetailsData));
    store.dispatch(setRatesToday(ratesTodayData));
  }
  return null;
}
