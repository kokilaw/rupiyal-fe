import ConverterWrapper from '@/app/ConverterWrapper';
import Charts from '@/app/charts';
import { extractPathData } from '@/utils/PathUtils';
import { getCurrencyName } from '@/utils/CurrencyUtils';

export async function generateMetadata({ params, searchParams }, parent) {
  const { path } = params;
  const { mode, currency } = extractPathData(path);
  const currencyName  = getCurrencyName(currency);
  const localCurrencyName = getCurrencyName('LKR');

  return {
    title: `1 ${currencyName} equals to 205.00 ${localCurrencyName} | Currency ${currency}/LKR - LKR.exchange`,
    description: `Explore the latest ${mode.toLowerCase()} rates for ${currency}`,
  };
}

export default function CurrenctConverterPage({ params = {}, searchParams }) {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div className="mx-auto max-w-5xl py-32 sm:py-32 lg:py-40">
        <div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="text-indigo-600">lkr.exchange</span> Currency
              Convertor
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore near real-time exchange rates from top banks in Sri Lanka,
              effortlessly compare their offerings, and unleash the power of our
              intuitive currency converter for seamless calculations, all on
              lkr.exchange!
            </p>
          </div>
        </div>
        <div className="mt-8 w-full">
          <ConverterWrapper />
        </div>
        <div className="relative mt-8 w-full rounded-lg ring-1 ring-slate-200">
          <div className="rounded-lg bg-white p-4 transition-all dark:bg-gray-950 sm:p-10">
            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
}
