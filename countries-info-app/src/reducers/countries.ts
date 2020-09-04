import { actionTypes, Action, Country } from "../actions/index";

export type countriesState = {
  countries: Country[];
};

const initialState: countriesState = {
  countries: [],
};

export const countriesReducer = (
  state: countriesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.fetchCountries:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};
