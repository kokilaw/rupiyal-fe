'use client';

import moment from 'moment';
import currency from 'currency.js';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function BankRatesTable({
  rates: initialRates,
  bankDetails: initialBankDetails,
}) {
  const {
    selectedRates: updatedSelectedRates,
    bankDetails: updatedBankDetails,
  } = useSelector((state) => state.global);
  const [rates, setRates] = useState(initialRates);
  const [bankDetails, setBankDetails] = useState(initialBankDetails);

  useEffect(() => {
    setBankDetails(updatedBankDetails);
    return () => {};
  }, [updatedBankDetails]);

  useEffect(() => {
    setRates(updatedSelectedRates);
    return () => {};
  }, [updatedSelectedRates]);

  return (
    <table className="w-full border-collapse text-left text-sm text-gray-500">
      <thead className="bg-gray-50 ">
        <tr>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Bank
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Rate
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">
            Last Updated
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        {(rates || []).map((entry, index) => (
          <tr
            key={index}
            className="bg-white bg-opacity-60 backdrop-blur-sm hover:bg-gray-50"
          >
            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src={bankDetails[entry.bankCode].logo.defaultUrl}
                  alt=""
                />
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-700">
                  {bankDetails[entry.bankCode].shortName}
                </div>
                <div className="text-gray-400 ">
                  {bankDetails[entry.bankCode].longName}
                </div>
              </div>
            </th>
            <td className="px-6 py-4">
              {currency(entry.rate, { pattern: `#` }).format()}
            </td>
            <td className="px-6 py-4">{moment(entry.lastUpdated).fromNow()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
