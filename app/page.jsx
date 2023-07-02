import SSRBankRatesTable from '@components/SSRBankRatesTable';
import ConverterCard from '@components/ConverterCard';
import Providers from '@components/Provider';

import { store } from '@store';
import { fetchStartUpDataAction } from '@store/actions/globalActions';

const Home = async () => {
  const bankDetailsReq = await fetch(
    'https://mocki.io/v1/a098da89-d72d-40f8-adee-d59c9be911ef'
  );
  const bankDetailsData = await bankDetailsReq.json();

  const allRatesDataReq = await fetch(
    'https://mocki.io/v1/483e7b0f-62a3-40ca-90a0-a75d3457c0b6'
  );
  const allRatesData = await allRatesDataReq.json();

  store.dispatch(fetchStartUpDataAction({bankDetailsData, allRatesData}));

  return (
    <Providers>
      <div>
        <div className="relative isolate lg:px-8">
          <div className="mx-auto max-w-fit py-8 md:py-16 lg:py-56">
            <div className={`grid grid-cols-5 gap-4`}>
              <div className="col-span-5 lg:col-span-2">
                <ConverterCard />
              </div>
              <div className="col-span-5 lg:col-span-3">
                <div className="overflow-auto rounded-lg border border-gray-200 shadow-md">
                  <SSRBankRatesTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Providers>
  );
};

export default Home;
