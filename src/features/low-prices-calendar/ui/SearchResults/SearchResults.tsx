import {useAppSelector} from "../../../../app/hooks";
import {selectSearchParams} from "../../../search-params-panel/searchParamsSlice";
import {useGetFlights} from "../../api/useGetFlights";
import OneDayBlock from "../OneDayBlock/OneDayBlock";
import styles from "./SearchResults.module.scss";
import {daysInMonth, getDayFromFullDate, getMonthNumberFromFullDate, getYearFromFullDate} from "../../lib/calendar";
import {IFlight} from "../../../../entities/Flight/model/types";

function SearchResults() {
  const searchParams = useAppSelector(selectSearchParams);
  const { flights, isLoading, error } = useGetFlights({
    currency: searchParams.currency,
    month: searchParams.month,
    origin: searchParams.origin,
    destination: searchParams.destination,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Sorry, we have an error: {JSON.stringify(error)}</p>;
  if (!flights) return <p>Send request to get results</p>;

  const daysInTotal = daysInMonth(getMonthNumberFromFullDate(searchParams.month), getYearFromFullDate(searchParams.month));

  // Prepare map - array of all the flights for each day
  const datesAndFlights: {day: number, flights: IFlight[]}[] = [];
  for (let i = 1; i <= daysInTotal; i++) {
    const allFlightsOnDate = flights.filter(flight => getDayFromFullDate(flight.depart_date) === i && +flight.number_of_changes <= +searchParams.changes);
    datesAndFlights.push({
      day: i,
      flights: allFlightsOnDate,
    })
  }

  return (
      <div className={styles.container}>
        {datesAndFlights.map(item => <OneDayBlock date={item.day} flights={item.flights} currency={searchParams.currency} key={item.day}/>)}
      </div>
  )
}

export default SearchResults;