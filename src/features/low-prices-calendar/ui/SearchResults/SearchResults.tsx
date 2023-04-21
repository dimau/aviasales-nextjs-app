import {useAppSelector} from "../../../../app/hooks";
import {selectSearchParams} from "../../../search-params-panel/searchParamsSlice";
import {useGetFlights} from "../../api/useGetFlights";
import OneDayBlock from "../OneDayBlock/OneDayBlock";
import styles from "./SearchResults.module.scss";
import {daysInMonth, getDayFromFullDate, getMonthNumberFromFullDate, getYearFromFullDate} from "../../lib/calendar";
import {IFlight} from "../../../../entities/Flight/model/types";
import DummyOneDayBlock from "../DummyOneDayBlock/DummyOneDayBlock";
import WeekDayTitle from "../WeekDayTitle/WeekDayTitle";

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

  // Add names for days of the week to the grid
  const dayTitles = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  // Define the day of the week for the 1 date of the month
  // 0 = Monday, ..., 6 = Sunday
  let firstDayOfTheWeek = new Date(searchParams.month).getDay();
  firstDayOfTheWeek = firstDayOfTheWeek === 0 ? 6 : firstDayOfTheWeek - 1;
  // Add dummies if the first day of the month is not a Monday
  const dummiesDays = [];
  for (let i = 0; i < firstDayOfTheWeek; i++) {
    dummiesDays.push(null);
  }

  // Prepare array of objects with data for each day of the month
  const datesAndFlights: ({day: number, flights: IFlight[]})[] = [];
  const daysInTotal = daysInMonth(getMonthNumberFromFullDate(searchParams.month), getYearFromFullDate(searchParams.month));
  for (let i = 1; i <= daysInTotal; i++) {
    const allFlightsOnDate = flights.filter(flight => getDayFromFullDate(flight.depart_date) === i && +flight.number_of_changes <= +searchParams.changes);
    datesAndFlights.push({
      day: i,
      flights: allFlightsOnDate,
    })
  }

  return (
      <div className={styles.container}>
        {/* First of all - titles for each day of the week */}
        {dayTitles.map((item, index) => <WeekDayTitle title={item} key={index} />)}

        {/* Add dummies for empty days if the first date of the month is not a Monday */}
        {dummiesDays.map((item, index) => <DummyOneDayBlock key={index} />)}

        {/* Cards for each date of the month */}
        {datesAndFlights.map(item => {
          return <OneDayBlock date={item.day} flights={item.flights} currency={searchParams.currency} key={item.day}/>
        })}
      </div>
  )
}

export default SearchResults;