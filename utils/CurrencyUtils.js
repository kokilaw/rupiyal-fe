// var TwitterCldr = require('twitter_cldr/core');

export function getCurrencyName(currencyCode) {
  return currencyCode;
}

export function formatNumberWithCurrency(number) {
  return `Rs. ${Number(number).toFixed(2)}`;
}

export function formatNumber(number) {
  return Number(number).toFixed(2);
}

export const getCurrencyFormattedChangeValue = (change) => {
  if (change > 0) {
    return `Rs. +${Number(change).toFixed(2)}`;
  } else if (change < 0) {
    return `Rs. -${Number(change).toFixed(2)}`;
  } else {
    return `Rs. ${Number(change).toFixed(0)}`;
  }
};
