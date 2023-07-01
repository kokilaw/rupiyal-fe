'use client';

import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MyTabs({ styles }) {
  const tabStrings = ['Buy', 'Sell'];
  return (
    <div className={`${styles}`}>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 backdrop-blur-sm">
          {tabStrings.map((tab) => (
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}