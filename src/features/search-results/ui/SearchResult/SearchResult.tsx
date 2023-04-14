import {useAppSelector} from "../../../../app/store";
import {selectSearchParams} from "../../../search-panel/searchParamsSlice";

export default function SearchResult() {
  const searchParams = useAppSelector(selectSearchParams);

  return <p>This is a search Result: {`${searchParams.month} ${searchParams.origin} ${searchParams.destination} ${searchParams.currency}`}</p>;
}