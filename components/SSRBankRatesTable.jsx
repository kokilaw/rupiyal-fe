import { store } from '@store';
import BankRatesTable from '@components/BankRatesTable';
import Providers from '@components/BankRatesTable';

export default function SSRBankRatesTable() {
  const rates = store.getState().global.selectedRates;
  const bankDetails = store.getState().global.bankDetails;
  return (
    <div>
      <BankRatesTable rates={rates} bankDetails={bankDetails} />
    </div>
  );
}
