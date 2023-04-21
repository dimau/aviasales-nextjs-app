import styles from "./WeekDayTitle.module.scss";

interface IWeekDayTitleProps {
  title: string;
}

function WeekDayTitle({title}: IWeekDayTitleProps) {
  return (
      <div className={styles.container}>{title}</div>
  );
}

export default WeekDayTitle;