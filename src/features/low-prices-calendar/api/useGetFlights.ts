import useSWR, { Fetcher } from 'swr'
import { Answer } from "../../../pages/api/flights";
import { IOption } from "../../search-params-panel/model/types";

const flightsEndpoint = "/api/flights";

type FetcherParams = [string, string, string, IOption, IOption];

const fetcher: Fetcher<Answer, FetcherParams> = (params) => {
  const [endpoint, currency, month, origin, destination] = params;
  return fetch(`${endpoint}?currency=${currency}&month=${month}&origin=${origin.id}&destination=${destination.id}`)
      .then(res => res.json());
}

interface IUseGetFlightsParams {
  currency: string;
  month: string;
  origin: IOption;
  destination: IOption;
}

function useGetFlights({currency, month, origin, destination}: IUseGetFlightsParams) {
  const key = [flightsEndpoint, currency, month, origin, destination];
  const { data, error, isLoading } = useSWR(currency !== "" ? key : null, fetcher);
  return {
    flights: data ? data.data : data,
    isLoading,
    error,
  }
}

export { useGetFlights };