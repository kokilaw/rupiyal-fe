'use client';

import { useRef } from 'react';
import { store } from '@store';
import { fetchStartUpDataAction } from '@store/actions/globalActions';

export default function PreLoader({ allRatesData }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    loaded.current = true;
    store.dispatch(fetchStartUpDataAction({ allRatesData }));
  }
  return null;
}
