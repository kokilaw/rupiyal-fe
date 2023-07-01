import { store } from '@store';
import BankRatesTable from '@components/BankRatesTable';

export default function SSRBankRatesTable() {
  const rates = store.getState().global.selectedRates;
  return (
    <div>
      <BankRatesTable rates={rates} />
    </div>
  );
}
