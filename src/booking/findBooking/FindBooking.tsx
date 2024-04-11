import { useState } from "react";
import BookingFound from "./bookingFound/BookingFound";

function findBooking() {

    const [searchBookingNumber, setSearchBookingNumber] = useState<string>("");
    const [foundDate, setFoundDate] = useState<Date>(new Date());
    const [foundSessionType, setFoundSessionType] = useState<string>("");
    const [foundSessionTime, setFoundSessionTime] = useState<string>("");
    const [foundName, setFoundName] = useState<string>("");
    const [bookingCancelled, setBookingCancelled] = useState<string>("");

    const checkValidBookingNumber = (value: string): boolean => {
        const testValue = /^\d{9}$/;
        return testValue.test(value);
    } 

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (searchBookingNumber) {
            if (checkValidBookingNumber(searchBookingNumber)) {
                const fetchAddress = "http://localhost:8080/api/find-booking/" + searchBookingNumber;
                fetch(fetchAddress)
                .then(res => res.json())
                .then(booking => {
                    console.log(booking);

                    const formattedDateString = booking.date;
                    const dateParts = formattedDateString.split("-");

                    setFoundDate(new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2])));
                    setFoundSessionType(booking.sessionType)
                    setFoundSessionTime(booking.session);
                    setFoundName(booking.name);
                });
            }
        } 
    }

    const cancelBooking = () => {
        fetch("http://localhost:8080/api/cancel-booking/" + searchBookingNumber, {
            method: "DELETE"
        })
        .then(res => res.text())
        .then(text => {
            setBookingCancelled(text);
            setFoundName("")
        })
    }

  return (
    <div>
        <h3>Enter a booking number to see an existing booking:</h3> 
        <form onSubmit={handleSubmit}>
        <input id="bookingNumber" value={searchBookingNumber} onChange={(e) => setSearchBookingNumber(e.target.value)}/>
        <button type="submit">Search</button>
        {foundName !== "" ? <BookingFound date={foundDate} name={foundName} sessionTime={foundSessionTime} sessionType={foundSessionType} cancelBooking={cancelBooking}/> : null } 
        {bookingCancelled !== "" ? <h2>Booking Cancelled!</h2> : null}
        </form>
    </div>
  )
}

export default findBooking