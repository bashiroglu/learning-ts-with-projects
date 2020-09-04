import React, { FC } from "react";
import "./countries.scss";
import { CountryCardProps, CountryCard } from "../countryCard/CountryCard";

type CountryProps = {
  countries: CountryCardProps[];
};
export const Countries: FC<CountryProps> = ({ countries }) => {
  return (
    <div className="countries-container">
      <div className="countries">
        {/* <h1>ssss</h1> */}
        {countries.length > 0 &&
          countries.map((country, i) => (
            <CountryCard key={country.numericCode} {...country} />
          ))}
      </div>
    </div>
  );
};
