import useSWR, { Fetcher } from 'swr'
import Answer from "../../../pages/api/flights";

type FetcherParams = [string, string, string, string, string];

const flightsEndpoint = "/api/flights";

const fetcher: Fetcher<Answer, FetcherParams> = (params) => {
  const [endpoint, currency, month, origin, destination] = params;
  return fetch(`${endpoint}?currency=${currency}&month=${month}&origin=${origin}&destination=${destination}`)
      .then(res => res.json());
}

function useGetFlights({currency, month, origin, destination}) {
  const key = [flightsEndpoint, currency, month, origin, destination];
  const { data, error, isLoading } = useSWR(currency !== "" ? key : null, fetcher);
  return {
    flights: data ? data.data : data,
    isLoading,
    error,
  }
}

export { useGetFlights };