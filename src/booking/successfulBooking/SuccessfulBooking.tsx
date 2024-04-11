interface Props {
    selectedDate: Date | null;
    selectedTreatment: string;
    selectedTime: string;
    bookingNumber: number
    updateSelectedDate: (date: Date | null) => void;
  }

function SuccessfulBooking(props: Props) {
  
    const handleClick = () => {
        props.updateSelectedDate(null);
    }
    
    return (
    <>
    <h2>Success!! ...and all it costs is your soul!</h2>
    <div>
    <h2>Booking Number: {props.bookingNumber}</h2>
    <h3>{props.selectedDate?.toDateString()}</h3>
    <h3>{props.selectedTime}</h3>
    <h3>{props.selectedTreatment}</h3>
    </div>
    <button onClick={() => handleClick()}>Start a New Booking</button>
    </>
  )
}

export default SuccessfulBooking