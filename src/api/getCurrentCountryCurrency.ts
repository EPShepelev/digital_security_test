import { getAllISOCodes } from "iso-country-currency";
import { getCountryInfo } from "../helpers/getCountryInfo";

export const getCurrentCountryCurrency = async () => {
  const codes = getAllISOCodes();
  const res = await fetch("https://api.db-ip.com/v2/free/self");
  const data = await res.json();
  const currentCountryCurrency = getCountryInfo(codes, data.countryCode);
  return currentCountryCurrency;
};
