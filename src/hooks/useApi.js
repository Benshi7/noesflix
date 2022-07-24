import React, { useEffect, useState } from "react";
import { apiBuilder, apiEntity, apiLanguage } from "../utils/apiConfig";

const useApi = (entity, lang = apiLanguage.spanish, pagination = 1) => {
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(pagination);
  const [query, setQuery] = useState("");

  const getData = async () => {
    setIsLoading(true);
    setError(null);

    const res = await apiBuilder.tryGet(entity, lang, page);

    if (res instanceof Error) {
      setError(res.message);
    } else {
      setValues(res);
    }
    setIsLoading(false);

    return res;
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  
  useEffect(() => {
    getData();
  }, [page]);

  const nextPage = () => {};
  const previusPage = () => {};

  

  return [values, isLoading, error, handleSearch, query];
};

export default useApi;
