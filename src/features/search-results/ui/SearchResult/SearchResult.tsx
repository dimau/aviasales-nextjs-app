import {useAppSelector} from "../../../../app/store";
import {selectSearchParams} from "../../../search-panel/searchParamsSlice";
import useSWR from 'swr'

const flightsEndpoint = "http://localhost:3000/api/flights";

const getFlights = async (params) => {
  const [endpoint, currency, month, origin, destination] = params;
  const response = await fetch(`${endpoint}?currency=${currency}&month=${month}&origin=${origin}&destination=${destination}`);
  return await response.json();
};

export default function SearchResult() {
  const searchParams = useAppSelector(selectSearchParams);
  const key = [flightsEndpoint, searchParams.currency, searchParams.month, searchParams.origin, searchParams.destination];
  const {data, error, isLoading} = useSWR(searchParams.currency !== "" ? key : null, getFlights);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Sorry, we have an error: {JSON.stringify(error)}</p>;

  return (
      <>
        <p>This is a search
          Result: {`${searchParams.month} ${searchParams.origin} ${searchParams.destination} ${searchParams.currency}`}</p>;
        <p>{data ? JSON.stringify(data) : "waiting"}</p>
      </>
  )
}