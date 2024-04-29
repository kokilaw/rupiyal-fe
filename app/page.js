import Link from 'next/link';
import CurrenctConverterPage from './currency-converter/[path]/page';
import { DEFAULT_BANK } from '@/utils/Constants';

export default function Page({ params = {} }) {
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
      </div>
    </div>
  );
}
