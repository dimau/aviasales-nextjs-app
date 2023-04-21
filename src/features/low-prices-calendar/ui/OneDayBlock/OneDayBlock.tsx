import {IFlight} from "../../../../entities/Flight/model/types";
import styles from "./OneDayBlock.module.css";
import {getCurrencySignFromString, sumPrettier} from "../../lib/currency";

interface IOneDayBlockProps {
  date: number;
  flights: IFlight[];
  currency: string;
}

function OneDayBlock({date, flights, currency}: IOneDayBlockProps) {
  // Find the minimal price for the ticket on the given date
  let minPrice = Infinity;
  for (const flight of flights) {
    if (flight.value < minPrice) {
      minPrice = flight.value;
    }
  }

  // Prepare string with minimal price
  const minPriceString = minPrice !== Infinity ? `${sumPrettier(minPrice)} ${getCurrencySignFromString(currency)}` : "—"

  return (
      <div className={styles.container}>
        <div className={styles.date}>{date}</div>
        <div className={styles.price}>{minPriceString}</div>
      </div>
  );
}

export default OneDayBlock;