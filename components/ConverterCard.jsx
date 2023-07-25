'use client';

import { useDispatch, useSelector } from 'react-redux';

import MyTabs from '@components/CurrencyModeTabs';
import CurrencySelector from '@components/CurrencySelector';
import BankSelector from '@components/BankSelector';

import getSymbolFromCurrency from 'currency-symbol-map';

import { ArrowsUpDownIcon } from '@heroicons/react/20/solid';

export default function ConverterCard({ styles }) {
  const { selectedCurrency, selectedBankCode, currencies } = useSelector(
    (state) => state.global
  );
  return (
    <div className="rounded-lg border border-gray-200 bg-white bg-opacity-40 px-6 py-4 shadow-md backdrop-blur-sm">
      <p className="mb-1 text-center text-sm font-medium text-gray-900">
        I Want To
      </p>
      <div className="mb-6">
        <MyTabs />
      </div>
      <p className="mb-1 text-center text-sm font-medium text-gray-900">
        Select Currency
      </p>
      <div className="mb-6">
        <CurrencySelector />
      </div>
      <p className="mb-1 text-center text-sm font-medium text-gray-900">
        Select Bank
      </p>
      <BankSelector />
      <hr className="my-6 h-0.5 border-t-0 bg-blue-900/20 opacity-100" />
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              {getSymbolFromCurrency(selectedCurrency)}
            </span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-end text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="m-2 flex items-center justify-center">
        <button>
          <ArrowsUpDownIcon
            className="h-5 w-5 text-gray-400 hover:text-gray-800"
            aria-hidden="true"
          />
        </button>
      </div>
      <div>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">රු</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            disabled={true}
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-end text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
            placeholder="0.00"
          />
        </div>
      </div>
    </div>
  );
}
