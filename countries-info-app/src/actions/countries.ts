import axios from "axios";
import { actionTypes } from "./types";
import { Dispatch } from "redux";

const url = "https://restcountries.eu/rest/v2/all";

export type Country = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  numericCode: string;
};

export interface fetchCountryAction {
  type: actionTypes.fetchCountries;
  payload: Country[];
}

export const fetchCountries = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Country[]>(url);
    dispatch<fetchCountryAction>({
      type: actionTypes.fetchCountries,
      payload: response.data,
    });
  };
};
