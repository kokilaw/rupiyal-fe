import { store } from '@store';
import BankRatesTable from '@components/BankRatesTable';
import Providers from '@components/BankRatesTable';

export default function SSRBankRatesTable() {
  const rates = store.getState().global.selectedRates;
  console.log(rates)
  return (
    <div>
        <BankRatesTable rates={rates} />
    </div>
  );
}
