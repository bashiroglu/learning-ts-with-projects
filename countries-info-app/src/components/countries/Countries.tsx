import React, { FC } from "react";
import "./countries.scss";
import { CountryCardProps, CountryCard } from "../countryCard/CountryCard";

type CountryProps = {
  countries: CountryCardProps[];
  // logCountries: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export const Countries: FC<CountryProps> = ({ countries }) => {
  return (
    <div className="countries-container">
      <div className="countries">
        {countries.length > 0 &&
          countries.map((country, i) => (
            <CountryCard key={country.numericCode} {...country} />
          ))}
      </div>
    </div>
  );
};
