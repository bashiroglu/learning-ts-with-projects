import React, { FC } from "react";
import { Link } from "react-router-dom";
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
    <Link to="/1">
      <div className="country-card">
        <div
          className="img-box"
          style={{ backgroundImage: `url(${flag})` }}
        ></div>
        <div className="text-box">
          <h3>{name}</h3>
          <p>
            population: <span>{population}</span>
          </p>
          <p>
            region: <span>{region}</span>
          </p>
          <p>
            capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
