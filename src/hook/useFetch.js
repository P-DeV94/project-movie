import useSWR from "swr";

export const useFetch= (url) => {
  
  const fetcher = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
        }
      })
  
      if (!response.ok) {
        throw new Error('Errore durante la richiesta');
      }
  
      const result = await response.json();
      console.log(result);
      return result

      // return results || genres || search;
  
    } catch (error) {
      console.error(error.message);
    }
  }

  const { data, error, isLoading } = useSWR(url, fetcher);

  return { data, error, isLoading };
};