import { Link } from "react-router-dom";

const CountryList = ({ name, flags }) => {
  return (
    <div className="text-center main-data shadow-lg">
      <Link to={`details/${name?.common}`}>
        <img
          src={flags?.svg}
          className="img-fluid"
          alt={name?.common}
          loading="lazy"
        />
        <p className="fw-bold text-white mt-4">{name?.common}</p>
      </Link>
    </div>
  );
};

export default CountryList;
