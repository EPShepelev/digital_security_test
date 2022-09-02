import { getCurrentCountryCurrency } from "./getCurrentCountryCurrency";

export const getCurrencies = async () => {
  const myHeaders = new Headers();
  myHeaders.append("apikey", "MCM7AKVdaSrUiWylU4lQfxJT6vS1oxQ7");

  const base = await getCurrentCountryCurrency();

  const res = await fetch(
    `https://api.apilayer.com/fixer/latest&base=${base}`,
    {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    }
  )
    .then((response) => response.json())
    // .then((result) => result.rates)
    .catch((error) => console.error("error", error));
  return res;
};
