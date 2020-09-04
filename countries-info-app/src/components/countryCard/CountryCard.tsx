import React, { FC } from "react";
import "./country-card.scss";

export type CountryCardProps = {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  numericCode: string;
};

export const CountryCard: FC<CountryCardProps> = ({
  name,
  region,
  flag,
  capital,
  population,
}) => {
  return (
    <div className="country-card">
      <div
        className="img-box"
        style={{ backgroundImage: `url(${flag})` }}
      ></div>
      <div className="text-box">
        <h2>{name}</h2>
        <h2>{population}</h2>
        <h2>{region}</h2>
        <h2>{capital}</h2>
      </div>
    </div>
  );
};
