import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const people = [
  {
    id: 1,
    name: 'USD',
    avatar: 'https://flagcdn.com/w80/us.png',
  },
  {
    id: 2,
    name: 'AUD',
    avatar: 'https://flagcdn.com/w80/au.png',
  },
  {
    id: 3,
    name: 'INR',
    avatar: 'https://flagcdn.com/w80/in.png',
  },
  {
    id: 4,
    name: 'GBP',
    avatar: 'https://flagcdn.com/w80/gb.png',
  },
  {
    id: 5,
    name: 'EUR',
    avatar: 'https://flagcdn.com/w80/eu.png',
  },
  {
    id: 5,
    name: 'LKR',
    avatar: 'https://flagcdn.com/w80/lk.png',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CurrencySelectListBox({
  selectedCurrencyIndex,
  disabled,
}) {
  const [selected, setSelected] = useState(people[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="">
            <Listbox.Button
              className="relative w-max cursor-default py-1.5 pl-3 pr-10 text-left text-lg leading-10 text-gray-900"
              disabled={disabled}
            >
              <span className="flex items-center">
                <img
                  src={selected.avatar}
                  alt=""
                  className="h-7 w-7 rounded-full object-cover"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
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
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={person.avatar}
                            alt=""
                            className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
                          />
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate',
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
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
