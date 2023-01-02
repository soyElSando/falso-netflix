import { useEffect, useState } from "react";

export const useFetch = (service, onInit = true) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [canFech, setCanFetch] = useState(onInit);

  const getData = async () => {
    setIsLoading(true);
    setError();
    try {
      const res = await service();
      setData(res);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      setCanFetch(false);
    }
  };

  useEffect(() => {
    if (canFech) {
      getData();
    }
  }, [canFech]);

  return {
    data,
    isLoading,
    error,
    setCanFetch,
  };
};
