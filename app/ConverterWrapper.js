import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Convertor from './converter';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const tabs = [
  {
    tabType: 'BUYING',
    tabName: 'Buying Rate',
    disabled: false,
  },
  {
    tabType: 'SELLING',
    tabName: 'Selling Rate',
    disabled: false,
  },
];

export default function ConverterWrapper() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <div className="flex flex-grow flex-row place-content-center">
        <Tab.List className="flex w-full space-x-1 rounded-xl bg-gray-900/20 p-1 sm:w-1/2">
          {tabs.map((tab) => (
            <Tab
              disabled={tab.disabled}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-indigo-600 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-indigo-600 shadow'
                    : 'text-gray-100 hover:bg-white/[0.12] hover:text-white',
                )
              }
            >
              {tab.tabName}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="mt-8">
        <Tab.Panel>
          <Convertor />
        </Tab.Panel>
        <Tab.Panel>
          <Convertor />
        </Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
