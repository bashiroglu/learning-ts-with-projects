import React, { useState, useEffect, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./app.scss";
import { Header } from "./components/header/Header";
import { Countries } from "./components/countries/Countries";
import { CountryCardProps } from "./components/countryCard/CountryCard";
import { StoreState } from "./reducers";
import { Action, actionTypes, fetchCountries } from "./actions";

function App() {
  // const [countries, setCountries] = useState<any[]>([]);
  const dispatch = useDispatch();
  const { countries } = useSelector((state: StoreState) => state.countries);
  console.log(countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div className="App">
      <Header />
      <Countries countries={countries} />
    </div>
  );
}

export { App };
