import styles from "./CurrencyInput.module.css";
import { IcurrencyInput } from "../../types/IcurrencyInput";

export const CurrencyInput = ({
  amount,
  currencies,
  currency,
  onAmountChange,
  onCurrencyChange,
}: IcurrencyInput) => {
  return (
    <div className={styles.group}>
      <input
        className={styles.input}
        type="text"
        value={amount}
        onChange={(e) => onAmountChange(+e.target.value)}
      />
      <select
        className={styles.select}
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
