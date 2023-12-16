import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const BASE_URL = `https://restcountries.com/v3.1`;

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
      setData(response?.data);
    } catch (error) {
      setError("An error occurred while fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
};

export default useFetch;
