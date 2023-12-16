import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
// components
import Loading from "./Loading";
// icons
import { FcHome } from "react-icons/fc";
import { BiMapPin } from "react-icons/bi";
// hooks
import useFetch from "../hooks/useFetch";

const Details = () => {
  const { data, isLoading, error, fetchData } = useFetch();
  const id = useParams().id;
  useEffect(() => {
    fetchData(`name/${id}`);
  }, [fetchData, id]);

  if (error)
    return (
      <h1 className="d-flex justify-content-center">
        Something Went wrong {":("}
      </h1>
    );

  return (
    <div className="container">
      <div className="home-icon">
        <Link to="/" data-toggle="tooltip" data-placement="bottom" title="Home">
          <FcHome />
        </Link>
      </div>
      {!isLoading ? (
        data.map((item) => (
          <div key={item.name.common} className="my-5">
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
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={item.maps.googleMaps}
                >
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
