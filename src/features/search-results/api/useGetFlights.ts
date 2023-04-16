import useSWR from "swr";

const flightsEndpoint = "/api/flights";

function fetcher(params) {
  const [endpoint, currency, month, origin, destination] = params;
  return fetch(`${endpoint}?currency=${currency}&month=${month}&origin=${origin}&destination=${destination}`)
      .then(res => res.json());
}

function useGetFlights({currency, month, origin, destination}) {
  const key = [flightsEndpoint, currency, month, origin, destination];
  return useSWR(currency !== "" ? key : null, fetcher);
}

export { useGetFlights };