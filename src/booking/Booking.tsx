import { useState } from 'react';
import CalenderComponent from './calenderComponent/calenderComponent';
import 'react-calendar/dist/Calendar.css';
import './booking.css';

function Booking() {

  return (
    <div id='bookingDiv'>
      <h2>Welcome to the booking page!</h2>
      <h3>Choose a date and treatment to see available sessions</h3>
      <CalenderComponent key="calender" />

    </div>
  )
}

export default Booking