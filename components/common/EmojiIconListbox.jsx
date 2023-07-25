'use client';

import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const optionList = [
  {
    id: 'USD',
    currencyCode: 'USD',
    currencyName: 'US Dollar',
    countryCode: 'USA',
    emoji: '🇺🇸',
  },
  {
    id: 'EUR',
    currencyCode: 'EURO',
    currencyName: 'Euro',
    countryCode: 'EU',
    emoji: '🇪🇺',
  },
  ,
  {
    id: 'AUD',
    currencyCode: 'AUD',
    currencyName: 'Australian Dollar',
    country: 'AUS',
    emoji: '🇦🇺',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function EmojiIconListbox({
  options,
  selectedOption: selected,
  onSelect,
}) {
  return (
    <Listbox value={selected} onChange={onSelect}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span
                  role="img"
                  aria-label={selected.emojiLabel}
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                >
                  {selected.emoji}
                </span>
                <span className="ml-3 block truncate">
                  {selected.displayText}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            role="img"
                            aria-label={option.emojiLabel}
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          >
                            {option.emoji}
                          </span>
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {option.displayText}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
