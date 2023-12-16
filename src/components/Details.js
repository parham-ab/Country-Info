import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
// components
import Loading from "./Loading";
// icons
import { FcHome } from "react-icons/fc";
import { BiMapPin } from "react-icons/bi";

const Details = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = useParams().id;

  useEffect(() => {
    const GetData = async () => {
      setLoading(true);
      const BASE_URL = `https://restcountries.com/v3.1/name/${id}`;
      const response = await axios
        .get(`${BASE_URL}`)
        .catch((error) => console.log("An Error Occured"));
      setData(response.data);
      setLoading(false);
    };
    GetData();
  }, []);

  return (
    <div className="container">
      {!loading ? (
        data.map((item) => (
          <div key={item.name.common}>
            <div className="home-icon">
              <Link
                to="/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Home"
              >
                <FcHome />
              </Link>
            </div>

            <div className="custom-container">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="img-fluid shadow-lg"
                    src={item.flags.svg}
                    alt="flag"
                    width="300px"
                    loading="lazy"
                  />
                  <h1 className="fw-bold">{item.name.common}</h1>
                </div>

                <div className="d-flex align-items-center gap-5 my-5">
                  <div>
                    <p>Name</p>
                    <p>Capital</p>
                    <p>Continent</p>
                    <p>Population</p>
                  </div>

                  <div>
                    <p>{item.name.official}</p>
                    <p>{item.capital}</p>
                    <p>{item.subregion}</p>
                    <p>{item.population.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center pt-2 gap-3 map-icon">
                <a rel="noopener" target={"_blank"} href={item.maps.googleMaps}>
                  <Button className="shadow-lg">
                    Google map <BiMapPin />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Details;
