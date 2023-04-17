import {IFlight} from "../../../../entities/Flight/model/types";
import styles from "./SearchResult.module.css";

interface ISearchResultProps {
  flight: IFlight;
}

function SearchResult({ flight }: ISearchResultProps) {
  const { depart_date, return_date, number_of_changes, value } = flight;
  return (
      <div className={styles.container}>
        <div>When: {depart_date}</div>
        <div>Return date: {return_date}</div>
        <div>Number of changes: {number_of_changes}</div>
        <div>Value: {value}</div>
      </div>
  );
}

export default SearchResult;