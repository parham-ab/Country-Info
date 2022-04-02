import React from "react";
import { Link } from "react-router-dom";

const CountryList = ({ info }) => {
  return (
    <div className="text-center main-data shadow-lg">
      <Link to={`details/${info.name.common}`}>
        <img
          src={info.flags.svg}
          className="img-fluid"
          alt={info.name.common}
          loading="lazy"
        />
        <p className="fw-bold text-white mt-4">{info.name.common}</p>
      </Link>
    </div>
  );
};

export default CountryList;
