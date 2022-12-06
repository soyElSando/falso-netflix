import { useState, useEffect } from "react";

export const useFetch = (service) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await service();
      setData(res);
    } catch (error) {
      setError(error);
      console.log("No llegaron los datos de la API: \n" + error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};