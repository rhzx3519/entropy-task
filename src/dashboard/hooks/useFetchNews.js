import { useEffect, useState } from "react";

const API_KEY = '315f3dcb5cad4541a9891496ffef24e8';

// category options: business entertainment general health science sports technology
const useFetchNews = ({ category }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!category) {
        return;
      }
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      const response = await fetch(`${url}&appid=${API_KEY}`);
      const fetchedData = await response.json();

      setData(fetchedData);
      setLoading(false);
    }
    fetchData();
  }, [ category ])

  return { data, loading };
};

export default useFetchNews;