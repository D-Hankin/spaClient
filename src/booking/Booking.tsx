import { useEffect, useState } from 'react';
import CalenderComponent from './calenderComponent/calenderComponent';
import 'react-calendar/dist/Calendar.css';
import './booking.css';
import GetSessions from './getSessions/GetSessions';
import GetTreatment from './getTreatment/GetTreatment';
import ShowConfirmationDialog from './getSessions/showConfirmationDialog/ShowConfirmationDialog';
import SuccessfulBooking from './successfulBooking/SuccessfulBooking';

interface Props {
  updatePage: (newPage: string) => void
}

function Booking(props: Props) {

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [confirmation, setConfirmation] = useState<Boolean>(false);
  const [success, setSuccess] = useState<Boolean>(false);

  const updateSelectedDate = () => {
    setSelectedDate(null)
  }

  const updateSelectedTime = (time: string) => {
    setSelectedTime(time);
  }

  const openCloseConfirmationDialog = (value: Boolean) => {
    setConfirmation(value); 
  }

  const updateSelectedTreatment = (treatment: string) => {
    setSelectedTreatment(treatment);
  }

  const updateSuccess = (value: Boolean) => {
    setSuccess(value)
  }

  useEffect(() => {
    setSelectedTreatment("");
    setSelectedTime("");
    setSuccess(false);
  }, [selectedDate])

  useEffect(() => {
    setSelectedTime("");
  }, [selectedTreatment]);

  useEffect(() => {
    if (selectedTime !== "") {
        setConfirmation(true);
        openCloseConfirmationDialog(true);
    }
    }, [selectedTime]);



  return (
    <div id='bookingDiv'>
      <h2>Welcome to the booking page!</h2>
      <h3>Choose a date and treatment to see available sessions</h3>
      { selectedDate === null ? <CalenderComponent key="calender" selectedDate={selectedDate} setSelectedDate={setSelectedDate} updatePage={props.updatePage}/> : null}
      { selectedTreatment === "" && selectedDate !== null ? <GetTreatment key="treatment" updateSelectedTreatment={updateSelectedTreatment} updatePage={props.updatePage}/> : null}
      { selectedTime === "" && selectedDate !== null && selectedTreatment !== "" ? <GetSessions key="sessions" selectedDate={selectedDate} selectedTreatment={selectedTreatment} updateSelectedTime={updateSelectedTime} /> : null}
      { confirmation && selectedDate !== null ? <ShowConfirmationDialog selectedDate={selectedDate} selectedTreatment={selectedTreatment} selectedTime={selectedTime} openCloseConfirmationDialog={openCloseConfirmationDialog} updateSuccess={updateSuccess} /> : null }
      { success ? <SuccessfulBooking updateSelectedDate={updateSelectedDate} /> : null}
      <p>*Closed on mondays for removal of gore. Bookings maximum 6 months in advance.</p>
      <p>**Here in The Pit of Despair we respect Swedish bank holidays specifically. DON'T ask why.</p>
    </div>
  )
}

export default Booking