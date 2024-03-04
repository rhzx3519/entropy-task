import { useEffect, useState } from "react";

const TOKEN = 'VNhHo62Q6pt7fslSYRpP_R_J2ZKj9xPUdJEa5olyuax3wjM0';

// category options: business entertainment general health science sports technology
const useFetchNews = ({ category }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!category) {
        return;
      }
      const url = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      const response = await fetch(url, {
        method: "GET",
      });
      const fetchedData = await response.json();

      setData(fetchedData);
      setLoading(false);
    }
    fetchData();
  }, [category])

  return { data, loading };
};

export default useFetchNews;