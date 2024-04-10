import { useState } from 'react';
import CalenderComponent from './calenderComponent/calenderComponent';
import 'react-calendar/dist/Calendar.css';
import './booking.css';
import GetSessions from './getSessions/GetSessions';
import GetTreatment from './getTreatment/GetTreatment';

interface Props {
  updatePage: (newPage: string) => void
}

function Booking(props: Props) {

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTreatment, setSelectedTreatment] = useState<String>("");

  return (
    <div id='bookingDiv'>
      <h2>Welcome to the booking page!</h2>
      <h3>Choose a date and treatment to see available sessions</h3>
      <CalenderComponent key="calender" selectedDate={selectedDate} setSelectedDate={setSelectedDate} updatePage={props.updatePage}/>
      <GetTreatment key="treatment" selectedTreatment={selectedTreatment} setSelectedTreatment={setSelectedTreatment} updatePage={props.updatePage}/>
      { selectedDate === null || selectedTreatment === "" ? null : <GetSessions key="sessions" selectedDate={selectedDate} selectedTreatment={selectedTreatment} updatePage={props.updatePage}/> }
      <p>*Closed on mondays for removal of gore. Bookings maximum 6 months in advance.</p>
      <p>**Here in The Pit of Despair we respect Swedish bank holidays specifically. DON'T ask why.</p>
    </div>
  )
}

export default Booking