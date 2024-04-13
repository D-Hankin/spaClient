import { useState } from "react";
import BookingFound from "./bookingFound/BookingFound";

interface Props {
    updateSearchedForBooking: (value: Boolean) => void;
    searchedForBooking: Boolean;
}

function findBooking(props: Props) {

    const [searchBookingNumber, setSearchBookingNumber] = useState<string>("");
    const [foundDate, setFoundDate] = useState<Date>(new Date());
    const [foundSessionType, setFoundSessionType] = useState<string>("");
    const [foundSessionTime, setFoundSessionTime] = useState<string>("");
    const [foundName, setFoundName] = useState<string>("");
    const [bookingCancelled, setBookingCancelled] = useState<string>("");
    const [backClick, setBackClick] = useState<boolean>(false);
    const [notFoundMessage, setNotFoundMessage] = useState<string>("");

    const checkValidBookingNumber = (value: string): boolean => {
        const testValue = /^\d{9}$/;
        return testValue.test(value);
    } 

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setBackClick(false);
        if (searchBookingNumber) {
            if (checkValidBookingNumber(searchBookingNumber)) {
                const fetchAddress = "http://localhost:8080/api/find-booking/" + searchBookingNumber;
                fetch(fetchAddress)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error("Booking not found");
                    }
                })
                .then(booking => {
                    console.log(booking);

                    const formattedDateString = booking.date;
                    const dateParts = formattedDateString.split("-");

                    setFoundDate(new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2])));
                    setFoundSessionType(booking.sessionType)
                    setFoundSessionTime(booking.session);
                    setFoundName(booking.name);
                    props.updateSearchedForBooking(true);
                }).catch(error => {
                    console.error("Error:", error.message);
                    setNotFoundMessage("No booking found with the provided number.");
                    props.updateSearchedForBooking(true);
                });
            }
            setSearchBookingNumber("");
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

    const handleClick = () => {
        props.updateSearchedForBooking(false);
        setBackClick(true);
    }

  return (
    <div>
        <h3>Enter a 9 digit booking number to see an existing booking:</h3> 
        <form onSubmit={handleSubmit}>
        <input id="bookingNumber" value={searchBookingNumber} onChange={(e) => setSearchBookingNumber(e.target.value)} style={ {color : checkValidBookingNumber(searchBookingNumber) ? 'green' : 'red' }}/>
        <button type="submit">Search</button>
        { notFoundMessage !== "" && backClick === false ? <h3>{ notFoundMessage }</h3> : null}
        { foundName !== "" && backClick == false ? <BookingFound date={foundDate} name={foundName} sessionTime={foundSessionTime} sessionType={foundSessionType} cancelBooking={cancelBooking}/> : null } 
        { bookingCancelled !== "" ? <h2>Booking Cancelled!</h2> : null}
        </form>
        { props.searchedForBooking ? <button onClick={handleClick}>Back</button> : null }
    </div>
  )
}

export default findBooking