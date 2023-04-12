interface IButtonProps {
  text: string;
}

export default function Button({text}: IButtonProps) {
  return <button type="submit">{text}</button>;
}