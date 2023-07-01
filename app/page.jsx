
import SSRBankRatesTable from '@components/SSRBankRatesTable';
import ConverterCard from '@components/ConverterCard';

import { store } from '@store';
import { setSelectedRates, setBankCode } from '@store/globalSlice';

const Home = () => {

  const entries = [
    {
      bankShortName: 'BOC',
      bankLongName: 'Bank of Ceylon',
      rate: 'Rs. 144.50',
      lastUpdated: '1 Hour Ago',
      imageUrl:
        'https://govdoc.nyc3.cdn.digitaloceanspaces.com/prod_job/logo/bank-of-ceylon-boc-logo.png',
    },
    {
      bankShortName: 'NTB',
      bankLongName: 'Nations Trust Bank',
      rate: 'Rs. 144.10',
      lastUpdated: '3 Hours Ago',
      imageUrl:
        'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042018/untitled-1_235.png?ccq.uKuBfgVDW6FzR8BS2JUug_Ulvx8Q&itok=Z3H3UayU',
    },
    {
      bankShortName: 'COMBANK',
      bankLongName: 'Commercial Bank',
      rate: 'Rs. 143.50',
      lastUpdated: '1 Hour Ago',
      imageUrl:
        'https://visitsrilanka.com/vs-discover/wp-content/uploads/2017/07/Visitsl-com-3.jpg',
    },
    {
      bankShortName: 'NSB',
      bankLongName: 'Nation Savings Bank',
      rate: 'Rs. 142.10',
      lastUpdated: '1 Day Ago',
      imageUrl:
        'data:image/png;base64,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',
    },
  ];

  store.dispatch(setSelectedRates(entries));

  return (
    <div>
      <div className="relative isolate lg:px-8">
        <div className="mx-auto max-w-fit py-8 md:py-16 lg:py-56">
          <div className={`grid grid-cols-5 gap-4`}>
            <div className="col-span-5 lg:col-span-2">
              <ConverterCard/>
            </div>
            <div className="col-span-5 lg:col-span-3">
              <div className="overflow-auto rounded-lg border border-gray-200 shadow-md">
                <SSRBankRatesTable/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
