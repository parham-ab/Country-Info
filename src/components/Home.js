import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import CountryList from "./CountryList";
import Loading from "./Loading";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const GetData = async () => {
      setLoading(true);
      const BASE_URL = `https://restcountries.com/v3.1/all`;
      const response = await axios
        .get(`${BASE_URL}`)
        .catch((error) => console.log("An Error Occured"));
      setData(response.data);
      setLoading(false);
    };
    GetData();
  }, []);
  // search country names
  const searchCoins = data.filter(
    (data) =>
      data.name.common.toLowerCase().includes(search.toLocaleLowerCase()) ||
      data.name.official.toLowerCase().includes(search.toLowerCase()) ||
      data.cca2.toLowerCase().includes(search.toLowerCase()) ||
      data.cca3.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="d-flex flex-wrap align-item-center justify-content-center">
        {!loading ? (
          searchCoins.map((item) => (
            <CountryList key={item.name.common} info={item} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
