'use client';

import { values, orderBy } from 'lodash';

import { useDispatch, useSelector } from 'react-redux';

import { onBankChangeEventAction } from '@store/actions/globalActions';
import CustomCombobox from './common/CustomCombobox';

const CurrencySelector = ({ styleClasses }) => {
  const dispatch = useDispatch();
  const { selectedBankCode, bankDetails } = useSelector((state) => state.global);

  const bankOptions = values(bankDetails).map((entry) => ({
    id: entry.bankCode,
    name: `${entry.shortName} - ${entry.longName}`
  }));
  const sortedBankOptions = orderBy(
    bankOptions,
    ['name'],
    ['asc']
  );

  const selectedOption = bankOptions.filter(
    (currencyOption) => currencyOption.id === selectedBankCode
  )[0];

  return (
    <div className={`${styleClasses}`}>
      <CustomCombobox
        options={sortedBankOptions}
        selectedOption={selectedOption}
        onSelect={(option) =>
          dispatch(onBankChangeEventAction({ bankCode: option.id }))
        }
      />
    </div>
  );
};

export default CurrencySelector;
