import Link from 'next/link';
import CurrenctConverterPage from './currency-converter/[path]/page';
import { DEFAULT_BANK } from '@/utils/Constants';

export default function Page({ params = {} }) {
  return (
    <div className="relative isolate px-6 lg:px-8">
      {/* <CurrenctConverterPage
        searchParams={{ bankCode: DEFAULT_BANK }}
        params={{ path: 'buying-rate-usd' }}
      /> */}
    </div>
  );
}
