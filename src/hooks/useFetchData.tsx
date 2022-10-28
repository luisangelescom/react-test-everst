import { useState, useEffect } from "react";

import { countries } from "../interface/data";
import testData from "../utils/data";

interface SendData {
  data: countries;
  loading: boolean;
}

const userFetchData = (): SendData => {
  const [data, setData] = useState<countries>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Cambiar a un servicio rest con fetch
  const getData = async (): Promise<countries> =>
    await new Promise((resolve) => {
      setTimeout(() => {
        return resolve(testData);
      }, 1000);
    });

  useEffect(() => {
    setLoading(true);
    getData()
      .then((response) => {
        setData(response);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
  };
};

export default userFetchData;
