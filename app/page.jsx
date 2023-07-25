import SSRBankRatesTable from '@components/SSRBankRatesTable';
import ConverterCard from '@components/ConverterCard';
import Providers from '@components/Provider';
import PreLoader from '@components/PreLoader';

import { store } from '@store';
import { fetchStartUpDataAction } from '@store/actions/globalActions';

const Home = async () => {
  const allRatesReq = await fetch(
    'http://localhost:8080/internal/exchange-rates/summary?targetDate=2023-07-24'
  );
  const allRatesData = await allRatesReq.json();

  store.dispatch(fetchStartUpDataAction({ allRatesData }));

  return (
    <div>
      <div className="relative isolate lg:px-8">
        <div className="mx-auto max-w-fit py-8 md:py-16 lg:py-56">
          <div className={`grid grid-cols-5 gap-4`}>
            <PreLoader allRatesData={allRatesData} />
            <Providers>
              <div className="col-span-5 lg:col-span-2">
                <ConverterCard />
              </div>
              <div className="col-span-5 lg:col-span-3">
                <div className="overflow-auto rounded-lg border border-gray-200 shadow-md">
                  <SSRBankRatesTable />
                </div>
              </div>
            </Providers>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
