import { Icountry } from "../types/Icountry";

export const getCountryInfo = (
  countriesArr: Array<Icountry>,
  currentCountry: string
) => {
  const countryInfo = countriesArr.find(
    (country: Icountry) => country.iso === currentCountry
  );
  if (countryInfo) {
    return countryInfo.currency;
  } else {
    console.error("country not found");
  }
};
