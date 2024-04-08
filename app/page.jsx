import SSRBankRatesTable from '@components/SSRBankRatesTable';
import ConverterCard from '@components/ConverterCard';
import Providers from '@components/Provider';
import PreLoader from '@components/PreLoader';

import { store } from '@store';
import { fetchStartUpDataAction } from '@store/actions/globalActions';

import ExchangeRatesPage from './rates/page';

const Home = async () => {

  return (
    <div>
      <ExchangeRatesPage/>
    </div>
  );
};

export default Home;
