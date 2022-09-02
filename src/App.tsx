import { useEffect, useState } from "react";
import "./App.css";
import { CurrencyInput } from "./components/CurrencyInput/CurrencyInput";
import { Title } from "./components/Title/Title";
import { getCurrencies } from "./api/getCurrencies";
import { format } from "./helpers/format";

function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("USD");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getCurrencies().then((data) => {
      setRates(data.rates);
      setCurrency1(data.base);
    });
  }, []);

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(1);
    }
  }, [rates]);

  function handleAmount1Change(amount1: number) {
    // @ts-ignore
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }
  function handleCurrency1Change(currency1: string) {
    // @ts-ignore
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }
  function handleAmount2Change(amount2: number) {
    // @ts-ignore
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }
  function handleCurrency2Change(currency2: string) {
    // @ts-ignore
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div className="App">
      <Title />
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
}

export default App;
