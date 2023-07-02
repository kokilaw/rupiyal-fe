'use client';

import { useDispatch, useSelector } from 'react-redux';

import MyTabs from '@components/MyTabs';
import CurrencySelector from '@components/CurrencySelector';
import BankSelector from '@components/BankSelector';

import getSymbolFromCurrency from 'currency-symbol-map';

import { ArrowsUpDownIcon } from '@heroicons/react/20/solid';

export default function ConverterCard({ styles }) {
  const { selectedCurrency, selectedBankCode, currencies } = useSelector((state) => state.global) ;
  return (
    <div className="rounded-lg border border-gray-200 shadow-md px-6 py-4 bg-white bg-opacity-40 backdrop-blur-sm">
      <p className="text-center text-gray-900 mb-1 text-sm font-medium">
        I Want To
      </p>
      <MyTabs styles="mb-6" />
      <p className="text-center text-gray-900 mb-1 text-sm font-medium">
        Select Currency
      </p>
      <CurrencySelector styles="mb-6" />
      <p className="text-center text-gray-900 mb-1 text-sm font-medium">
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
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 text-end"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="flex justify-center items-center m-2">
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
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6 text-end"
            placeholder="0.00"
          />
        </div>
      </div>
    </div>
  );
}
