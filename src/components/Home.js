import { useEffect, useState } from "react";
// components
import CountryList from "./CountryList";
import Loading from "./Loading";
// hooks
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, error, fetchData } = useFetch();
  useEffect(() => {
    fetchData("all");
  }, [fetchData]);
  // search country names
  const searchData = data.filter(
    (data) =>
      data.name.common.toLowerCase().includes(search.toLocaleLowerCase()) ||
      data.name.official.toLowerCase().includes(search.toLowerCase()) ||
      data.cca2.toLowerCase().includes(search.toLowerCase()) ||
      data.cca3.toLowerCase().includes(search.toLowerCase())
  );
  if (error)
    return (
      <h1 className="d-flex justify-content-center">
        Something Went wrong {":("}
      </h1>
    );
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex flex-wrap align-item-center justify-content-center">
        {!isLoading ? (
          searchData.map((item) => (
            <CountryList key={item.name.common} {...item} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
