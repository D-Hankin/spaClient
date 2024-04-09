import React from 'react'
import CalenderComponent from './calenderComponent/calenderComponent'

function Booking() {
  return (
    <>
      <h2>Welcome to the booking page!</h2>
      <h3>Choose a date and treatment to see available sessions</h3>
      <CalenderComponent key="calender"/>
    </>
  )
}

export default Booking