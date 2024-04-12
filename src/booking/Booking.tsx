import { useEffect, useState } from 'react';
import CalenderComponent from './calenderComponent/calenderComponent';
import 'react-calendar/dist/Calendar.css';
import './booking.css';
import GetSessions from './getSessions/GetSessions';
import GetTreatment from './getTreatment/GetTreatment';
import ShowConfirmationDialog from './getSessions/showConfirmationDialog/ShowConfirmationDialog';
import SuccessfulBooking from './successfulBooking/SuccessfulBooking';
import ReturnButton from './returnButton/ReturnButton';
import FindBooking from './findBooking/FindBooking'

interface Props {
  updatePage: (newPage: string) => void
}

function Booking(props: Props) {

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [confirmation, setConfirmation] = useState<Boolean>(false);
  const [success, setSuccess] = useState<Boolean>(false);
  const [bookingNumber, setBookingNumber] = useState<number>(0);
  const [searchedForBooking, setSearchedForBooking] = useState<Boolean>(false);

  const updateBookingNumber = (value: number) => {
    setBookingNumber(value);
  }

  const updateSelectedDate = (date: Date | null) => {
    setSelectedDate(date)
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

  const updateConfirmation = (value: Boolean) => {
    setConfirmation(value);
  }

  const updateSuccess = (value: Boolean) => {
    setSuccess(value);
  }

  const updateSearchedForBooking = (value: Boolean) => {
    setSearchedForBooking(value);
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
      <div>
        <h2>Welcome to the booking page!</h2>
      </div>
      { selectedDate === null ? <FindBooking updateSearchedForBooking={updateSearchedForBooking} searchedForBooking={searchedForBooking}/> : null}
      { selectedDate === null && searchedForBooking === false ? <CalenderComponent key="calender" selectedDate={selectedDate} setSelectedDate={setSelectedDate} updatePage={props.updatePage} /> : null}
      { selectedTreatment === "" && selectedDate !== null ? <GetTreatment key="treatment" updateSelectedTreatment={updateSelectedTreatment} updatePage={props.updatePage} /> : null}
      { selectedTime === "" && selectedDate !== null && selectedTreatment !== "" ? <GetSessions key="sessions" selectedDate={selectedDate} selectedTreatment={selectedTreatment} updateSelectedTime={updateSelectedTime} /> : null}
      { confirmation && selectedDate !== null ? <ShowConfirmationDialog selectedDate={selectedDate} selectedTreatment={selectedTreatment} selectedTime={selectedTime} openCloseConfirmationDialog={openCloseConfirmationDialog} updateSuccess={updateSuccess} updateBookingNumber={updateBookingNumber}/> : null }
      { success ? <SuccessfulBooking updateSelectedDate={updateSelectedDate} selectedDate={selectedDate} selectedTreatment={selectedTreatment} selectedTime={selectedTime} bookingNumber={bookingNumber}/> : null}
      { selectedDate !== null && !success  ? <ReturnButton selectedDate={selectedDate} updateSelectedDate={updateSelectedDate} selectedTreatment={selectedTreatment} updateSelectedTreatment={updateSelectedTreatment} selectedTime={selectedTime} updateSelectedTime={updateSelectedTime} confirmation={confirmation} updateConfirmation={updateConfirmation}/> : null}
    </div>
  )
}

export default Booking