export const getCurrencies = async () => {
  const myHeaders = new Headers();
  myHeaders.append("apikey", "Qiqyv218o6RjeIQP7gZuiT8o6nq8GuJk");

  const res = await fetch("https://api.apilayer.com/fixer/latest", {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((result) => result.rates)
    .catch((error) => console.log("error", error));
  return res;
};
