import { combineReducers } from "redux";

// import { Country } from "../actions";
import { countriesReducer } from "./countries";

const rootReducer = combineReducers({
  countries: countriesReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

export default rootReducer;
