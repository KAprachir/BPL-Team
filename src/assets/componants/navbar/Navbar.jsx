import React from "react";
import logoImg from "../../../assets/logo.png";
import currencyImg from "../../../assets/Currency.png";

const Navbar = ({ coin }) => {
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-15 h-15" src={logoImg} alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <p className="text-lg mr-2">{coin} Coin </p>
        <span>
          <img src={currencyImg} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
