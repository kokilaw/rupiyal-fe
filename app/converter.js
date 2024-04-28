import CurrencySelectListBox from '@/components/CurrencySelectListBox';
import BankSelectListBox from '@/components/BankSelectListBox';
import { ArrowsRightLeftIcon } from '@heroicons/react/20/solid';
import _ from 'lodash';
import { navigate } from './actions';
import { getUpdatedPath } from '@/utils/PathUtils';

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

export default function Convertor({
  mode,
  bankCode,
  currencyCode,
  rate,
  bankDetails,
}) {
  const onBankChange = (newBank) => {
    navigate(getUpdatedPath(mode, currencyCode, newBank.id))
  };
  const bankDropDownData = getBankDropDownListData(bankDetails);
  const selectedBankData = _.filter(
    bankDropDownData,
    (entry) => entry.id == bankCode,
  )[0];

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
                  type="text"
                  name="amount"
                  id="amount"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-lg leading-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
                <div className="absolute inset-y-0 right-0">
                  <CurrencySelectListBox />
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
                  className="block w-full rounded-md border-0 py-1.5 text-lg leading-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
                <div className="absolute inset-y-0 right-0">
                  <CurrencySelectListBox
                    disabled={true}
                    selectedCurrencyIndex={4}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-11">
              <div className="px-4 text-center sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  1.00 USD = <span className="text-green-800">307.58</span> LKR
                </h3>
                <p className="text-sm leading-6 text-gray-500">
                  Last updated 14 minutes ago
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
