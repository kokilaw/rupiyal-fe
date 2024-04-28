import Link from 'next/link';
import CurrenctConverterPage from './currency-converter/[path]/page';

export default function Page({ params = {} }) {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <CurrenctConverterPage />
    </div>
  );
}
