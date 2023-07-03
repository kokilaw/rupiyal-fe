'use client';

import { values, orderBy, map } from 'lodash';

import { useDispatch, useSelector } from 'react-redux';

import { onCurrencyChangeEventAction } from '@store/actions/globalActions';
import EmojiIconListbox from './common/EmojiIconListbox';

const CurrencySelector = ({ styleClasses }) => {
  const dispatch = useDispatch();
  const { selectedCurrency, currencies } = useSelector((state) => state.global);

  const currencyOptions = values(currencies).map((entry) => ({
    id: entry.currencyCode,
    displayText: entry.extendedDisplayName,
    emoji: entry.countryFlagEmoji,
    emojiLabel: entry.countryCode,
  }));
  const sortedCurrencyOptions = orderBy(
    currencyOptions,
    ['displayText'],
    ['asc']
  );

  const selectedOption = currencyOptions.filter(
    (currencyOption) => currencyOption.id === selectedCurrency
  )[0];

  return (
    <div className={`${styleClasses}`}>
      <EmojiIconListbox
        options={sortedCurrencyOptions}
        selectedOption={selectedOption}
        onSelect={(option) =>
          dispatch(onCurrencyChangeEventAction({ currencyCode: option.id }))
        }
      />
    </div>
  );
};

export default CurrencySelector;
