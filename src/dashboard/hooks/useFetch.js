import { useState, useEffect } from "react";

const useFetch = ({ crd }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!crd) {
        return
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd?.latitude}&lon=${crd?.longitude}&units=metric`
      const API_KEY = "908ad75f36452c11ff4306cd53162218";
      const response = await fetch(`${url}&appid=${API_KEY}`);
      const fetchedData = await response.json();

      setData(fetchedData);
      setLoading(false);
    }
    fetchData();
  }, [crd]);
  return { data, loading };
};

export default useFetch;
