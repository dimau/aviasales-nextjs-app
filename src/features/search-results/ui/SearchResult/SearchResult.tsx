import {useAppSelector} from "../../../../app/store";
import {selectSearchParams} from "../../../search-panel/searchParamsSlice";
import {useGetFlights} from "../../api/useGetFlights";

export default function SearchResult() {
  const searchParams = useAppSelector(selectSearchParams);
  const { data, isLoading, error } = useGetFlights({
    currency: searchParams.currency,
    month: searchParams.month,
    origin: searchParams.origin,
    destination: searchParams.destination,
  });

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