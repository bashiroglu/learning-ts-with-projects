import React, { useState } from "react";
import axios from "axios";
import "./app.scss";
import { Header } from "./components/header/Header";
import { Countries } from "./components/countries/Countries";

function App() {
  const [countries, setCountries] = useState<any[]>([]);
  const logCountries = async () => {
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    console.log(response);
    setCountries(response.data);
  };
  console.log(countries);

  return (
    <div className="App">
      <Header />
      <button onClick={logCountries}>bring</button>
      
      <Countries countries={countries} />
    </div>
  );
}

export default App;
