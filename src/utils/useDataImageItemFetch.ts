import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';

export const useDataImageItemFetch = (param: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any[]>([]);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const result = await axios.get(
        `https://picsum.photos/v2/${param}?page=${page}`,
      );
      setResponse(prevResponse => [...prevResponse, ...result.data]);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [param, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    setPage(1);
    setResponse([]);
    return fetchData();
  };

  const fetchMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return {response, isLoading, isError, refetch, fetchMore};
};
