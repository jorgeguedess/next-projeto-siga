interface CalendarTaskProps {
  dateText: string;
  contentText: string;
}

const CalendarTask = ({ dateText, contentText }: CalendarTaskProps) => {
  return (
    <li>
      <span className="mb-1 text-sm font-medium uppercase text-primary-foreground">
        {dateText}
      </span>
      <p className="text-xl font-medium">{contentText}</p>
    </li>
  );
};

export default CalendarTask;
