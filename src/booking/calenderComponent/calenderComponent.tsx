import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import getRedDays from './getRedDays/getRedDays';
import 'react-calendar/dist/Calendar.css';
import './calenderComponent.css';

interface Props {
  selectedDate: Date | null,
  setSelectedDate: (selectedDate: Date) => void,
  updatePage: (newPage: string) => void
};

function calender(props: Props) {

  const [maxDate] = useState<Date>(() => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 6);
    return maxDate;
  });
  const [redDays, setRedDays] = useState<string[]>([]);

  useEffect(() => {
    getRedDays().then(setRedDays);
  }, []);

  const handleClick = (value: Date) => {
    props.setSelectedDate(value);
  }

  const isDateDisabled = ({ date }: { date: Date }) => {
    return date.getDay() === 1 || redDays.includes(date.toDateString());
  };

  return (
    <div id='calenderDiv'>
      <h3>Or choose a date and treatment to see available sessions</h3>
      <Calendar className="calender" onClickDay={value => handleClick(value)} value={props.selectedDate} maxDate={maxDate} minDate={new Date()} selectRange={false} tileDisabled={isDateDisabled} />
    </div>
  )
}

export default calender