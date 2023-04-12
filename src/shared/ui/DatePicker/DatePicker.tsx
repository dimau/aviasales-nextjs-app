interface IDatePickerProps {
  name: string;
}

export default function DatePicker({name}: IDatePickerProps) {
  return <input type="date" name={name}/>
}