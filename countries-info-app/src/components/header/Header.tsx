import React, { FC } from "react";
import "./header.scss";

export const Header: FC = () => {
  return (
    <nav className="navbar">
      <h2>Where is the world</h2>
      <div className="navbar__theme-box">
        <span>Dark Mode</span>
      </div>
    </nav>
  );
};
