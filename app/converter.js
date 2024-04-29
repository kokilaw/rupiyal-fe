'use client'

import CurrencySelectListBox from '@/components/CurrencySelectListBox';
import BankSelectListBox from '@/components/BankSelectListBox';
import { ArrowsRightLeftIcon } from '@heroicons/react/20/solid';
import _ from 'lodash';
import { navigate } from './actions';
import { getUpdatedPath } from '@/utils/PathUtils';
import { formatNumber } from '@/utils/CurrencyUtils';
import moment from 'moment';

import supportedCurrencies from '@/misc/supported-currencies.json';
import { useEffect, useState } from 'react';

const getBankDropDownListData = (bankDetails) => {
  const data = _.keys(bankDetails).map((entry) => {
    return {
      id: bankDetails[entry].bankCode,
      name: `${bankDetails[entry].longName} - ${bankDetails[entry].shortName}`,
      thumbnail: bankDetails[entry].logo.defaultUrl,
    };
  });
  return data;
};

const getSupportedCurrencies = () => {
  return supportedCurrencies.map((currency) => {
    const iso2CountryCode = currency.substring(0, 2);
    const flagUrl = `https://flagcdn.com/w80/${iso2CountryCode.toLowerCase()}.png`;
    return {
      countryCode: iso2CountryCode,
      flagUrl: flagUrl,
      currency,
    };
  });
};

const getLKRCurrencyData = () => {
  return [
    {
      countryCode: 'LK',
      flagUrl: `https://flagcdn.com/w80/lk.png`,
      currency: 'LKR',
    },
  ];
};

export default function Convertor({
  mode,
  bankCode,
  currencyCode,
  bankDetails,
  latestRateForBank,
}) {

  const [inputValue, setInputValue] = useState('1.00');
  const [convertedValue, setConvertedValue] = useState(latestRateForBank.rate.toLocaleString());

  useEffect(() => {
    setConvertedValue((parseFloat(inputValue.replace(/,/g, '')) * latestRateForBank.rate).toLocaleString());
  }, [inputValue, latestRateForBank.rate]);

  const onBankChange = (newBank) => {
    navigate(getUpdatedPath(mode, currencyCode, newBank.id));
  };
  const bankDropDownData = getBankDropDownListData(bankDetails);
  const selectedBankData = _.filter(
    bankDropDownData,
    (entry) => entry.id == bankCode,
  )[0];
  const supportedCurrencies = getSupportedCurrencies();
  const selectedCurrency = getSupportedCurrencies().filter(
    (entry) => entry.currency == currencyCode,
  )[0];
  const onCurrencySelectionChange = (newCurrencyCode) => {
    navigate(getUpdatedPath(mode, newCurrencyCode, bankCode));
  };

  return (
    <div className="relative w-full rounded-lg ring-1 ring-slate-200">
      <div className="rounded-lg bg-white p-4 transition-all dark:bg-gray-950 sm:p-10">
        <div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-11">
            <div className="sm:col-span-5">
              <label
                htmlFor="amount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Amount
              </label>
              <div className="relative mt-2">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  autoComplete="given-name"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-lg leading-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
                <div className="absolute inset-y-0 right-0">
                  <CurrencySelectListBox
                    supportedCurrencies={supportedCurrencies}
                    selectedCurrency={selectedCurrency}
                    onCurrencyChange={onCurrencySelectionChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center sm:col-span-1 sm:mt-8">
              <div className="p-0">
                <ArrowsRightLeftIcon
                  className="h-5 w-5 rotate-90 cursor-pointer text-gray-400 sm:rotate-0"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="sm:col-span-5">
              <label
                htmlFor="convertedTo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Converted To
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  name="convertedTo"
                  id="convertedTo"
                  autoComplete="family-name"
                  value={convertedValue}
                  className="block w-full rounded-md border-0 py-1.5 text-lg leading-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
                <div className="absolute inset-y-0 right-0">
                  <CurrencySelectListBox
                    supportedCurrencies={getLKRCurrencyData()}
                    selectedCurrency={getLKRCurrencyData()[0]}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-11">
              <div className="px-4 text-center sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  1.00 {currencyCode.toUpperCase()} ={' '}
                  <span className="text-green-800">
                    {formatNumber(latestRateForBank.rate)}
                  </span>{' '}
                  LKR
                </h3>
                <p className="text-sm leading-6 text-gray-500">
                  Last updated {moment(latestRateForBank.lastUpdated).fromNow()}
                </p>
              </div>
            </div>

            <div className="sm:col-span-11">
              <div className="flex flex-grow flex-row place-content-center px-4 sm:px-0">
                <div className="w-full sm:w-1/2">
                  <BankSelectListBox
                    bankDropDownData={bankDropDownData}
                    selectedBankCode={bankCode}
                    selectedBankData={selectedBankData}
                    onBankChangeEvent={(bankCode) => onBankChange(bankCode)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
