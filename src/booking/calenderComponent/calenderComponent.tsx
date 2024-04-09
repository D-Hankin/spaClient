import { useState } from 'react'
import Calendar from 'react-calendar'
import getRedDays from './getRedDays/getRedDays';

function calender() {

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [maxDate, setMaxDate] = useState<Date>(() => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setMonth(maxDate.getMonth() + 6);
    return maxDate;
  });
  
  getRedDays()

  return (
    <div id='calenderDiv'>
      <Calendar onClickDay={setSelectedDate} value={selectedDate} maxDate={maxDate} minDate={new Date()} selectRange={false} tileDisabled={( {date} ) => date.getDay() === 1}/>
      <p>*Closed on mondays for removal of gore. Bookings maximum 6 months in advance.</p>
      <p>**Here in The Pit of Despair we respect Swedish bank holidays specifically. DON'T ask why.</p>
      <p>{selectedDate.toDateString()}</p>
    </div>
  )
}

export default calender