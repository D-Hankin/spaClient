interface Props {
    date : Date;
    name: string;
    sessionType: string;
    sessionTime: string;
    cancelBooking: () => void;
}

function BookingFound(props: Props) {

    const handleClick = () => {
        props.cancelBooking();
    }

  return (
    <div>
        <h2>Booking Found!</h2>
        <p>{props.name}</p>
        <p>{props.date.toLocaleDateString()}</p>
        <p>{props.sessionTime}</p>
        <p>{props.sessionType}</p>
        <button onClick={handleClick}>Cancel Booking</button>
    </div>
  )
}

export default BookingFound