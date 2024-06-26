import { capitalize } from './StringUtils';

export function extractPathData(path) {
  const datas = path.split('-');
  return {
    mode: `${capitalize(datas[0])}`,
    currency: datas[2].toUpperCase(),
  };
}

export function getUpdatedPath(mode, currencyCode, bankCode) {
  return `/${mode.toLowerCase()}-rate-${currencyCode.toLowerCase()}?bankCode=${bankCode}`
}