function daysInMonth (month, year) { // Use 1 for January, 2 for February, etc.
  return new Date(year, month, 0).getDate();
}

function getDayFromFullDate(date: string): number {
  if (date.length !== 10) {
    // TODO: logging
    console.log("Incorrect date string: " + date);
  }
  return +date.slice(8, 10);
}

function getMonthNumberFromFullDate(date: string): number {
  if (date.length !== 10) {
    // TODO: logging
    console.log("Incorrect date string: " + date);
  }
  return +date.slice(5, 7);
}

function getYearFromFullDate(date: string): number {
  if (date.length !== 10) {
    // TODO: logging
    console.log("Incorrect date string: " + date);
  }
  return +date.slice(0, 4);
}

export { daysInMonth, getMonthNumberFromFullDate, getYearFromFullDate, getDayFromFullDate };