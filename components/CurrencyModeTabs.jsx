'use client';

import { Tab } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { findIndex } from 'lodash';

import { CURRENCY_MODE } from '@common/constants';
import { onModeChangeEventAction } from '@store/actions/globalActions';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const tabs = [
  {
    id: CURRENCY_MODE.BUY,
    name: 'Buy',
  },
  {
    id: CURRENCY_MODE.SELL,
    name: 'Sell',
  },
];

export default function CurrencyModeTabs() {
  const dispatch = useDispatch();
  const { selectedMode } = useSelector((state) => state.global);
  const selectedTabIndex = findIndex(tabs, (tab) => tab.id === selectedMode);

  return (
    <Tab.Group
      selectedIndex={selectedTabIndex}
      onChange={(index) =>
        dispatch(onModeChangeEventAction({ mode: tabs.at(index).id }))
      }
    >
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 backdrop-blur-sm">
        {tabs.map((tab) => (
          <Tab
            className={({ selected }) =>
              classNames(
                'text-black-700 w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none ',
                selected
                  ? 'bg-white shadow'
                  : 'text-white/[0.5] hover:bg-white/[0.12] hover:text-white'
              )
            }
            key={tab.id}
          >
            {tab.name}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
}
